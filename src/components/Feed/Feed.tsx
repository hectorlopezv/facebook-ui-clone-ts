import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
export interface FeedProps {
    
}
 
const Feed: React.FC<FeedProps> = () => {
    return (  
        <div className="feed">
            <StoryReel />
            {/*StoryReel*/}
            {/*MessageSender */}
            {/*Posts */}
        </div>
    );
}
 
export default Feed;