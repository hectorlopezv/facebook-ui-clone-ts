import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './Message.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../Store/StateContext';
import {db} from '../../../lib/firebase.prod';
import firebase from 'firebase';

export interface MessageProps {
    
}
 
const Message: React.FC<MessageProps> = () => {
    const [state, dispatch] =  useStateValue();
    const [Input, setInput] = useState('');
    const [ImageURL, setImageURL] = useState('');
    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Post to the FIRESTORE
        db.collection('posts').add({
            message: Input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: state.user.photoURL,
            username: state.user.displayName,
            image: ImageURL
        });
        setInput('');
        setImageURL('');
    }

    return (  
        <div className="message">
            <div className="message__top">
                <Avatar src={state.user.photoURL}/>
                <form>
                    <input 
                        className="message__input" value={Input} 
                        onChange={(event: any)=> setInput(event.target.value)} 
                        type="text" placeholder={`what on your mind ${state.user.displayName}?`}
                    />
                    <input 
                        type="text" 
                        value={ImageURL}
                        onChange={(event: any)=> setImageURL(event.target.value)} 
                        placeholder="image URL(Optional)"
                    />

                    <button onClick={handleSubmit} type="submit">
                                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="message__bottom">

                <div className="message__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="message__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="message__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>
    );
}
 
export default Message;