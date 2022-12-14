import styled from "@emotion/styled";
import { breakpointsWidth, getVW, sizes, getCurrentColor } from "styles";


export const FullSizeButtonWrapper = styled.div`
    position: absolute;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${sizes['desktopLG'].half};
    svg {
        cursor: pointer;
        & > * {
            transition: stroke 0.3s;
        }
        &:hover {
            & > * {
            stroke: ${({ theme }) => getCurrentColor("primary", theme)};  
            }
        }
    }
    @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
        svg {
            width: ${getVW(26)};
            height: ${getVW(26)};
        }
    }
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