import React from 'react'
import ReactDOM from 'react-dom'



const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
const App = (props) => {

  props ={
    name: 'Arto Hellas',
    age: 35,
  }

  const name= props.name
  const age = props.age
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name="Clint" age={26+10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))