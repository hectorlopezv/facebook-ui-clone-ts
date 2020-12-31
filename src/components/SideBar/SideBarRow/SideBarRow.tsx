import { Avatar } from '@material-ui/core';
import React from 'react';
import './SideBarRow.css';

export interface SideBarRowProps {
    title: string;
    src?: string;
    Icon?: any;
    onClick?: any;
}
 
const SideBarRow: React.FC<SideBarRowProps> = (props) => {
    const {title, src, Icon} = props;
    return (  

        <div className="sidebarRow" onClick={props.onClick}>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}
 
export default SideBarRow;