import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import { sizes, hexToRGBA, colors, breakpointsWidth } from 'styles';

export const PartnersLineWrapper = styled.div`
    overflow: hidden;
`

export const PartnersItem = styled.div`
    min-width: ${sizes['desktopLG'].x1};
    border: 1px solid ${hexToRGBA(colors.white, 0.2)};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PartnersLineSlider = styled.div`
    height: ${sizes['desktopLG'].x1};
    display: flex;
    transform: ${({ step }) => 'translateX(calc(' + (0 - step) + '*' + sizes['desktopLG'].x1 + '))'};
    transition: transform ${({ step }) => step === 0 ? '0s' : '1s'};
    transition-timing-function: cubic-bezier(0.58, 3, 0.15, 0.81);
    @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
        transform: ${({ step }) => 'translateX(calc(' + (0 - step) + '*' + sizes['tabletSM'].x1 + '))'};
        height: ${sizes['tabletSM'].x1};
        ${PartnersItem}{
            min-width: ${sizes['tabletSM'].x1};            
        }        
    }
`