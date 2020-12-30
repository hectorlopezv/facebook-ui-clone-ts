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

`;

export const title = styled.h4`

`;

export const avatar = styled(Avatar)`

`;