import styled from 'styled-components/macro';
import { Avatar } from '@material-ui/core';

interface ContainerProps {
    background: any;
}

export const Container = styled.div<ContainerProps>`
    background-image: ${({background})=> `url(${background})`};
    width: 300px;
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 200px;
    box-shadow: 0px 5px 17px -7px rgba(0,0,0, .75);
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 100ms ease-in;

    &:hover {
        transform: scale(1.05);
    }
`;


export const title = styled.h4`
    position: absolute;
    bottom: 20px;
    left: 15px;
    color: white;
`;

export const avatar = styled(Avatar)`
    margin: 10px;
    border: 3.5px solid #2e81f4;
`;