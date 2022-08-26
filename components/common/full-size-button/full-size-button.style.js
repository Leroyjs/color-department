import styled from "@emotion/styled";
import { getCurrentPaddingStyle, breakpointsWidth} from "styles";

export const FullSizeButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: inline;
    ${getCurrentPaddingStyle("top","md1")}
    cursor: pointer;
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        svg {
            width: 26px;
            height: 26px;
        }
    }
`