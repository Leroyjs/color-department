import { css } from "@emotion/css";

const { default: styled } = require("@emotion/styled");

export const FoxPawDynamic = ({ isHover, isCliked }) => css`
    transform: ${true ? " translateX(0px)" : ""};
`

export const FoxPawWrapper = styled.div`
    position:absolute;
    right:-200px;
    transform: ${({ isHover }) => isHover ? "translateX(-200px)" : "translateX(0px)"};
    transition: transform 0.5s;

    

`