import { css } from "@emotion/css";
import { sizes, breakpointsWidth } from "styles";
import styled from "@emotion/styled";

export const StartScreenWrapper = styled.div`
  height: 100vh;
  height: calc(var(--fsvh, 1vh) * 100);
  pointer-events: none;
`

export const FlexLayerWrapper = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    pointer-events: none;
`

export const ContentWrapper = styled.div`
    pointer-events: none;
    position: relative;
    padding-top: ${sizes["desktopLG"].half};
    @media screen and (max-width: ${breakpointsWidth.tabletLG}){
      padding-top: ${sizes["tabletLG"].thirdX2};
    }
    @media screen and (max-width: ${breakpointsWidth.phone}){
      padding-top: ${sizes["tabletLG"].x1};
    }
    height: 100vh;
    height: calc(var(--fsvh, 1vh) * 100);
`

export const RunningLineStyle = css`
  max-width: 100vw;
  position: absolute;
  bottom: 0;
`;
