import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { sizes } from 'styles';

export const StartScreenWrapper = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`

export const RunningLineStyle = css`
    max-width: 100vw;
    position: absolute;
    bottom: 0;
`

export const GridWrapperZone = styled.div`
    position: relative;
    padding-top: ${sizes['desktopLG'].half};
    height: 100%;
    overflow: hidden;
`

export const GridUnvisibleZone = styled.div`
    min-height: ${sizes['desktopLG'].half};
    height: 0%;
` 
export const GridVisibleZone = styled.div`
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s;

`
