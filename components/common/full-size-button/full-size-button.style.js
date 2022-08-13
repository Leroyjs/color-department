import styled from "@emotion/styled";
import { getCurrentPaddingStyle } from "styles";

export const FullSizeButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: inline;
    ${getCurrentPaddingStyle("top","md1")}
    cursor: pointer;
`