import styled from "@emotion/styled"
import { colors, getCurrentBackgroundColorStyles } from "styles"

export const FooterNavBar = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width:100%;
    height: 100px;    
`

export const FooterNavBarItem = styled.div`
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.black};
    &:hover{
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};    
        & span {
            color: ${colors.black};
            transition : color 0.5s;    
        } 
    }
    transition : background-color 0.5s;
`