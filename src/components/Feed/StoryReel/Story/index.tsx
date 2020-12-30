import React, { Children } from 'react';
import {Container as Scontainer, title as Stitle, avatar as Savatar} from './styles/Story';



export interface AvatarProps {
    src: string;
}
 
const Avatar: React.FC<AvatarProps> = ({...props}) => {
    return (  <Savatar {...props}/>);
}
 

export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Stitle {...props}> {children}</Stitle>);
}

export interface ContainerProps {
    background: any;
}
const Container: React.FC<ContainerProps> = ({children, ...props}) => {

    return (<Scontainer {...props}> {children}</Scontainer>);
}

interface Compounds {

}
/////////////////////////////////////////////////////
export interface StoryProps {
    image: string;
    profileSrc: string; 
    title: string;
}
 
const Story: React.FC<StoryProps> = ({image, profileSrc, title}) => {
    return ( 
        
        <Container background={image}>
            <Avatar src={profileSrc} />
            <Title>{title}</Title>
        </Container>
    );
}
 
export default Story;