import styled from "@emotion/styled"
import { colors, getCurrentBackgroundColorStyles,breakpointsWidth, sizes } from "styles"

export const MenuItemWrapper = styled.li`
    text-transform: uppercase;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items:center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: ${sizes['desktopLG'].half};
    opacity: ${({clickAnimation})=> clickAnimation? '0.5' : '1'};
    transition: opacity 0.1s;
    &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
        span {
            color: ${colors.black};
        }
    }
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        height: 80px;
    }
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        height: 64px;
    }

`