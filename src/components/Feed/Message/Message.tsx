import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './Message.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
export interface MessageProps {
    
}
 
const Message: React.FC<MessageProps> = () => {
    const [Input, setInput] = useState('');
    const [ImageURL, setImageURL] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Post to the FIRESTORE
        setInput('');
        setImageURL('');
    }

    return (  
        <div className="message">
            <div className="message__top">
                <Avatar src="https://avatars2.githubusercontent.com/u/46845790?s=460&u=74f9d06a8654751455170eb721ffd54de0fec990&v=4"/>
                <form>
                    <input 
                        className="message__input" value={Input} 
                        onChange={(event: any)=> setInput(event.target.value)} 
                        type="text" placeholder="what on your mind?"
                    />
                    <input 
                        type="text" 
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