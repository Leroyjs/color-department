import styled from "@emotion/styled"
import { getCurrentPaddingStyle } from "styles"
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
    ${getCurrentPaddingStyle('top','xsm')}
    ${getCurrentPaddingStyle('bottom','sm')}
    padding: 8px 0 14px;
    opacity: ${({clickAnimation})=> clickAnimation? '0.5' : '1'};
    transition: opacity 0.1s;
    &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
        span {
            color: ${colors.black};
        }
    }

    @media screen and (max-width: ${breakpointsWidth.phone}) {
        ${getCurrentPaddingStyle('vertical','md')}
    }

`