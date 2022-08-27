import styled from "@emotion/styled";
import { getCurrentPaddingStyle,sizes, breakpointsWidth} from "styles";

export const FullSizeButtonWrapper = styled.div`
    position: absolute;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${sizes['desktopLG'].half};
    cursor: pointer;
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        svg {
            width: 26px;
            height: 26px;
        }
    }
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        height: ${sizes['tabletLG'].thirdX1};

    }
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        height: ${sizes['tabletLG'].half};
    }
`