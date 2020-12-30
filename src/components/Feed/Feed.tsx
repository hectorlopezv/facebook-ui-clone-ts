import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import Message from './Message/Message';
import Post from './Post/Post';

export interface FeedProps {
    
}
 
const Feed: React.FC<FeedProps> = () => {
    return (  
        <div className="feed">
            <StoryReel />
            <Message />
            <Post
                profilePic={""}
                message={"hector message"}
                timestamp={"this is a timeStamp"}
                username={"this is a username"}
                image={""}
            />
            <Post
                profilePic={""}
                message={"hector message"}
                timestamp={"this is a timeStamp"}
                username={"this is a username"}
                image={""}
            />
            {/*Widgets */}


        </div>
    );
}
 
// {posts.map(post => (
//     <Post
//         key={post.data.id}
//         profilePic={post.data.profilePic}
//         message={post.data.message}
//         timestamp={post.data.timestamp}
//         username={post.data.username}
//         image={post.data.image}
//     />
//     ))}
export default Feed;