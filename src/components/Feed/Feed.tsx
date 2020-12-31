import React,{useState, useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import Message from './Message/Message';
import Post from './Post/Post';
import {db} from '../../lib/firebase.prod';

export interface FeedProps {
    
}

const Feed: React.FC<FeedProps> = () => {
    const [posts, setposts] = useState<any>();
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot: any) => {//listener...
            setposts(snapshot.docs.map((doc: any) => ({
                id: doc.id, data: doc.data()
            })));
        });

        return
    }, []);
    return (  
        <div className="feed">
            <StoryReel />
            <Message />

             {posts?.map((post: any) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                message={post.data.message}
                    timestamp={post.data.timestamp}
                username={post.data.username}
                    image={post.data.image}
                />
                ))}



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