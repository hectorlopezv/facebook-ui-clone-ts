import React from 'react';
import './Header.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import { useStateValue } from '../../Store/StateContext';

export interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    const [state, dispatch] =  useStateValue();
    return (  
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />

            <TextField
                    className={""}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    placeholder="search Facebook"
                    size='small'
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                />
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
            </div>
            
            <div className="header__right">

                <div className="header__info">
                    <Avatar alt="" src={state.user.photoURL} />
                    <h4>Hector Lopez</h4>
                </div>
                <IconButton aria-label="delete">
                    <AddIcon />
                </IconButton>

                <IconButton aria-label="delete">
                    <ForumIcon />
                </IconButton>

                <IconButton aria-label="delete">
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton aria-label="delete">
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    );
}
 
export default Header;