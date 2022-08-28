import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { sizes, breakpointsWidth } from 'styles';

export const PhotoStartScreenWrapper = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`
export const FlexLayerWrapper = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
`

export const ContentWrapper = styled.div`
    position: relative;
    padding-top: ${sizes["desktopLG"].half};
    @media screen and (max-width: ${breakpointsWidth.tabletLG}){
      padding-top: ${sizes["tabletLG"].thirdX2};
    }
    @media screen and (max-width: ${breakpointsWidth.phone}){
      padding-top: ${sizes["tabletLG"].x1};
    }
    height: 100vh;
`

export const RunningLineStyle = css`
  max-width: 100vw;
  position: absolute;
  bottom: 0;
`;


export const BG = styled.div`
    background-color: red;
    position: sticky;
    top: -100vh;
    height: 100vh;
    width: 100vh;
`