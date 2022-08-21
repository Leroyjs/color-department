import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import { sizes, hexToRGBA, colors } from 'styles';

const scrollAnimation = keyframes`
    from { transform: translateX(0);}
    to { transform: translateX(-50%); }
`

export const PartnersLineWrapper = styled.div`
    overflow: hidden;
`

export const PartnersLineSlider = styled.div`
    height: ${sizes['desktopLG'].x1};
    display: flex;
    transform: ${({ step }) => 'translateX(calc(' + (0 - step) + '*' + sizes['desktopLG'].x1 + '))'};
    transition: transform ${({ step }) => step === 0 ? '0s' : '2s'};
    transition-timing-function: cubic-bezier(0.58, 1.75, 0.15, 0.81);
`

export const PartnersItem = styled.div`
    width: ${sizes['desktopLG'].x1};
    border: 1px solid ${hexToRGBA(colors.white, 0.2)};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`

    object-fit: contain;
`