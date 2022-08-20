import { css } from "@emotion/css";
import { sizes } from "styles";
import styled from "@emotion/styled";

export const StartScreenWrapper = styled.div`
  height: 100vh;
`

export const FlexLayerWrapper = styled.div`
    position: fixed;
    z-index: -1;
`

export const ContentWrapper = styled.div`
    position: relative;
    padding-top: ${sizes["desktopLG"].half};
    height: 100vh;
`

export const RunningLineStyle = css`
  max-width: 100vw;
  position: absolute;
  bottom: 0;
`;

export const GridWrapperZone = styled.div`
  position: relative;
  padding-top: ${sizes["desktopLG"].half};
  height: 100%;
  overflow: hidden;
`;

export const GridUnvisibleZone = styled.div`
  min-height: ${sizes["desktopLG"].half};
  height: 0%;
`;
export const GridVisibleZone = styled.div`
  height: calc((100% - ${sizes["desktopLG"].half}));
  overflow: hidden;
  transition: transform 0.5s;
  bottom: 0;
  position: absolute;
`;
