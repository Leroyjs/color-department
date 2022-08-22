import styled from "@emotion/styled"
import { Caption } from "components"
import { colors, getCurrentBackgroundColorStyles, getCurrentGridTemplateColumsStyle, hexToRGBA, sizes } from "styles"

export const FooterNavBar = styled.div`
    display: grid;
    ${getCurrentGridTemplateColumsStyle()}
    width:100%;
    height: ${sizes['desktopLG'].half};
    & > *:nth-of-type(1n){
        border: 1px solid ${hexToRGBA(colors.white, 0.2)};
        border-left: none;
    }
    & > *:nth-of-type(1){
        border-left: 1px solid ${hexToRGBA(colors.white, 0.2)};
    }

    & *:nth-of-type(1){grid-column: 1/3;}
    & *:nth-of-type(2){grid-column: 3/5;}
    & *:nth-of-type(3){grid-column: 5/7;}
    & *:nth-of-type(4){grid-column: 7/9;}
`

export const FooterNavBarItem = styled.div`
    height: 100%;
    cursor: pointer;
    flex: 1 0 auto;
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

export const socialIcon = styled.img`
    object-fit: contain;
    object-position: center;
    width: 16px;
    height: 16px;
`

export const socialLabel = styled(Caption)`

`