import React,{useState, useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import Message from './Message/Message';
import Post from './Post/Post';
import {db} from '../../lib/firebase.prod';
import Pusher from 'pusher-js';
import instance from 'axios';

export interface FeedProps {
    
}
const pusher = new Pusher('f81994f70b8bafc3b71e', {
    cluster: 'us2'
});

const Feed: React.FC<FeedProps> = () => {
    const [posts, setposts] = useState<any>();
    const syncFeed = () => {
        instance.get('/retrieve/posts')
        .then((res :any) => {

        });
    }
    useEffect(() => {
        //setting pusher subcribe event
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data: any) {
          //do stuff when data changes
            
        });
    }, []);
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