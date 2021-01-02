import React,{useState, useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import Message from './Message/Message';
import Post from './Post/Post';
import {db} from '../../lib/firebase.prod';
import Pusher from 'pusher-js';
import instance from '../../axios';

export interface FeedProps {
    
}
const pusher = new Pusher('f81994f70b8bafc3b71e', {
    cluster: 'us2'
});

const Feed: React.FC<FeedProps> = () => {
    const [posts, setposts] = useState<any>();


    //get data when page load
    useEffect(() => {
        const syncFeed = async () => {
           const request = await instance.get('/retrieve/posts');
           console.log(request);
           setposts(request.data);
        };
        syncFeed();
    }, []);


    //pusherjs and mongodb and update post when data changes
    useEffect(() => {
        //setting pusher subcribe event
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data: any) {
          //do stuff when data changes
            
        });
    }, []);



    //firebase store
    // useEffect(() => {
    //     db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot: any) => {//listener...
    //         setposts(snapshot.docs.map((doc: any) => ({
    //             id: doc.id, data: doc.data()
    //         })));
    //     });
    // }, []);//take post from mongodb



    return (  
        <div className="feed">
            <StoryReel />
            <Message />

             {posts?.map((post: any) => (
                <Post
                    key={post._id}
                    profilePic={post.avatar}
                    message={post.text}
                    timestamp={post.timestamp}
                    username={post.user}
                    image={post?.image}
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