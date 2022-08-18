import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import * as emotionCss from '@emotion/css';
import { sizes, getCurrentGridTemplateColumsStyle, getCurrentPaddingStyle } from 'styles';

export const PhotoStartScreenWrapper = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`

export const RunningLineStyle = emotionCss.css`
    max-width: 100vw;
    position: absolute;
    bottom: 0;
`

export const Picture = emotionCss.css`
    width: 100%;
    height: 100%;    
    padding: 24px;
    & img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const BlinkedPictureField = styled.div`
    position: absolute;
    top:${sizes['desktopLG'].half};
    width: 100vw;
    height: calc(100vh - ${sizes['desktopLG'].x1} - ${sizes['desktopLG'].half});
`

export const GridWrapper = styled.div`
    height: 100%;
    overflow: hidden;
`;

const GridInnerDinamicStyle = ({ lineAmount }) => css`
    grid-template-rows: repeat(${lineAmount}, 12.5vw);
`

export const GridInner = styled.div`
    position: absolute;
    display: grid;
    height: 100%;
    padding-top: ${sizes['desktopLG'].half};
    padding-bottom: 12.5vw;
    ${getCurrentGridTemplateColumsStyle()};
    ${GridInnerDinamicStyle};
    align-content: end;
`;

export const Cell = styled.div`
    width: 100%;
    height: 100%;
    border-top: 1px solid red;
    &:not(:nth-of-type(8n)) {
        border-right: 1px solid red;
    }
`;


const blinkAnimation = (top, rotate, reverse) => {
    return keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
    `
  }


const BlankPictureDynamic = ({ isVisible, animationDuration, coordX, coordY }) => css`
    top: ${coordY+'px'};
    left: ${coordX+'px'};
    animation: ${blinkAnimation()} 2s infinite;
    transition: opacity ease-in 0.1s;
`

export const BlinkPictureWrapper = styled.div`
    position:absolute;
    padding: 24px;
    width: ${sizes['desktopLG'].x1};
    height: ${sizes['desktopLG'].x1};
    & img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    }
    ${BlankPictureDynamic}
`

// export const GridInnerPhoto = styled.div`
//   position: absolute;
//   display: grid;
//   ${getCurrentGridTemplateColumsStyle()}
//   grid-template-rows: repeat(1, 12.5vw);
//   align-content: end;
//   height: 100%;
// `;

// export const CellPhoto = styled.div`
//   width: 100%;
//   height: 100%;
//   border-top: 1px solid red;

//   &:not(:nth-of-type(8n)) {
//     border-right: 1px solid red;
//   }
// `;


const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
}