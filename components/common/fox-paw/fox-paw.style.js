import styled from "@emotion/styled";
import { breakpointsWidth } from 'styles';



export const FoxPawWrapper = styled.div`
    position:absolute;
    right:-200px;
    transform: ${({ isHover }) => isHover ? "translateX(-200px)" : "translateX(0px)"};
    transition: transform 0.5s;
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        svg { height: 44px }
        right:-150px;
        transform: ${({ isHover }) => isHover ? "translateX(-100px)" : "translateX(0px)"};
    }    
`