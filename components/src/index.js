import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApporvalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApporvalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentContent="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApporvalCard>
            <ApporvalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    commentContent="This is so coll" 
                    avatar={faker.image.avatar()}
                />
            </ApporvalCard>
            <ApporvalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 5:00PM" 
                    commentContent="I've seen better, lol" 
                    avatar={faker.image.avatar()}
                />
            </ApporvalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));