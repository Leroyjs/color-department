import styled from "@emotion/styled";
import { colors } from "styles";

export const MenuWrapper = styled.div`
    margin: 0 auto ;
    left: 0;
    right: 0;
    max-width: 1600px;
    position: fixed;
    z-index: 100;
    top: 101px;
    overflow: hidden;
    height : ${({ isOpen }) => isOpen ? "calc(100vh - 100px)" : "0"};
    background-color: ${colors.black};
    transition: height 0.7s;
`
export const MenuBody = styled.nav`
    position: absolute;
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
`
export const MenuMap = styled.div`
    width: 50%;
    background-image: url('./tmp-map.jpg');
`
export const MenuList = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const MenuFooter = styled.div`
    position: absolute;
    width:100%;
    bottom: 0;    
`