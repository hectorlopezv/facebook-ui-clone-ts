import { Avatar } from '@material-ui/core';
import React from 'react';
import Message from '../Message/Message';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import './Post.css';
import { ExpandMoreOutlined } from '@material-ui/icons';
export interface PostProps {
    profilePic?: string;
    image?:string;
    username?: string;
    timestamp?: any;
    message?: string;
}
 
const Post: React.FC<PostProps> = ({profilePic, image, username, timestamp, message}) => {
    console.log('el timestamp', timestamp);
    
    return (  
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            {/*image*/}
            <div className="post__image">
                <img src={image ? `http://localhost:9000/image/${image}` : ''} alt=""/>
            </div>



            <div className="post__options">
                <div className="post__option">
                <ThumbUpIcon />
                <p>Like</p>
                </div>
                <div className="post__option">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
                </div>
                <div className="post__option">
                <NearMeIcon />
                <p>Share</p>
                </div>
                <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreOutlined />
                </div>
            </div>

        </div>
    );
}
 
export default Post;