import styled from "@emotion/styled"
import { colors } from "styles"
import { getCurrentBackgroundColorStyles } from "styles"

export const MenuItemWrapper = styled.li`
    text-transform: uppercase;
    text-align: center;
    display:flex;
    justify-content: center;
    padding: 12px 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
        span {
            color: ${colors.black};
        }
    }
`
