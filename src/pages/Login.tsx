import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import {auth, provider} from '../lib/firebase.prod';
import Modal from '@material-ui/core/Modal';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../Store/StateContext';
import {actionTypes} from '../Store/reducer';
export interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> = () => {
    const [Error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const [state, dispatch] =  useStateValue();

    const handleClose = () => {
        setOpen(false);
    };

    const signIn = () => {
        //sign firebase sheit
        auth.signInWithPopup(provider)
        .then((result: any) => {
            setOpen(false);
            setError(null);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            history.push('/');
        })
        .catch((error: any) =>{
            setError(error.message);
            setOpen(true);
        })
    }

    
    return (  
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt="fb circle" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="fb text"/>
            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="Modal">
            <p>{Error}</p>
        </div>
      </Modal>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    );
}
 
export default Login;