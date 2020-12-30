import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import Message from './Message/Message';
export interface FeedProps {
    
}
 
const Feed: React.FC<FeedProps> = () => {
    return (  
        <div className="feed">
            <StoryReel />
            <Message />
            
            {/*MessageSender */}
            {/*Posts */}
        </div>
    );
}
 
export default Feed;