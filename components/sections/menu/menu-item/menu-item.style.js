import styled from "@emotion/styled"
import { colors } from "styles"
import { getCurrentBackgroundColorStyles, getCurrentPaddingStyle, sizes } from "styles"

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

    //TODO: Вынести в общие
    &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
        span {
            color: ${colors.black};
        }
    }
`
