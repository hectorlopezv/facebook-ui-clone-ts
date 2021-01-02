import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './Message.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../Store/StateContext';
// import {db} from '../../../lib/firebase.prod';
import firebase from 'firebase';
import FormData from 'form-data';//create form data like postman
import instance from '../../../axios';
export interface MessageProps {
    
}
 
const Message: React.FC<MessageProps> = () => {
    const [state, dispatch] =  useStateValue();
    const [Input, setInput] = useState('');
    const [ImageURL, setImageURL] = useState<null | string>('');
    const [image, setimage] = useState<any>(null);

    //replace with mongo db stuff
    const savePost = async (post: any) => {
        await instance.post('/upload/post', post).then((resp) => {
            console.log(resp);
        })
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Post to the FIRESTORE
        //post operations steps
        //post
        //images
        
        if(image !== null){//upload image first and then post after
            const imgForm: any = new FormData();//generate form_data for uploading image
            imgForm.append('file', image, image.name);//file
            instance.post('/upload/image', imgForm, {//upload image first then post
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data;`,
                }
            }).then((res: any) => {
                console.log('despues del upload de la image', res.data);

                //POst Data.....
                const postData = {
                    text: Input,
                    imgName: res.data.file.filename,
                    user: state.user.displayName,
                    avatar: state.user.photoURL,
                    timestamp: new Date().toUTCString(),
                }

                savePost(postData);

            })
        }else { //just post the data
            console.log('no habia imagen');
            const postData = {
                text: Input,
                user: state.user.displayName,
                avatar: state.user.photoURL,
                timestamp: new Date().toUTCString(),
            }
            savePost(postData);
        }

        setInput('');
        setImageURL('');
        setimage(null);
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
                    
                    <input 
                        type="file" 
                        onChange={(event: any) => setimage(event.target.files[0])}
                        placeholder="image URL(Optional)"
                    />
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