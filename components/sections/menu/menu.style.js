import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";



export const MenuFooter = styled.div`
    position: absolute;
    width:100%;
    height: 100px;
    bottom: 0;
    background-color: blue;
`

export const MenuBody = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
`

export const MenuWrapper = styled.div`
    margin: 0 auto ;
    left: 0;
    right: 0;
    max-width: 1600px;
    position: fixed;
    top: 100px;
    background-color: green;
    overflow: hidden;
    height : ${({ isOpen }) => isOpen ? "calc(100vh - 100px)" : "0"};

    transition: height 0.7s;
`


export const MenuMap = styled.div`
width: 50%;
background-color: yellow;
`

export const MenuList = styled.div`
    width: 50%;
    background-color: red;

`
