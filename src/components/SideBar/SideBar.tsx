import React from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow/SideBarRow';
import Avatar from '@material-ui/core/Avatar';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from '../../Store/StateContext';
export interface SideBarProps {
    
}
 
const SideBar: React.FC<SideBarProps> = () => {
    const [state, dispatch] =  useStateValue();
    return ( 

        <div className="sidebar">
            <SideBarRow
                src={state.user.photoURL}
                title={state.user.displayName}
            />
            <SideBarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messanger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlined} title="More" />
      </div>
     );
}
 
export default SideBar;