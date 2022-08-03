import styled from "@emotion/styled";

export const FoxPawWrapper = styled.div`
    position:absolute;
    right:-200px;
    transform: ${({ isHover }) => isHover ? "translateX(-200px)" : "translateX(0px)"};
    transition: transform 0.5s;
`