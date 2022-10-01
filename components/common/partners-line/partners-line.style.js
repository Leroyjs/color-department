import { breakpointsWidth, colors, hexToRGBA, sizes } from 'styles'

import { keyframes } from '@emotion/css'
import styled from '@emotion/styled'

export const PartnersLineWrapper = styled.div`
  overflow: hidden;
`

export const PartnersItem = styled.div`
  min-width: ${sizes['desktopLG'].x1};
  border: 1px solid ${hexToRGBA(colors.white, 0.2)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  picture {
    position: relative;
    object-fit: contain;
    height: 34%;
    width: 68%;
  }
`

export const PartnersLineSlider = styled.div`
  height: ${sizes['desktopLG'].x1};
  display: flex;
  transform: ${({ step }) =>
    'translateX(calc(' + (0 - step) + '*' + sizes['desktopLG'].x1 + '))'};
  transition: transform ${({ step }) => (step === 0 ? '0s' : '0.3s')};
  transition-timing-function: cubic-bezier(0.52, 1.29, 0.92, 0.97);

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    transform: ${({ step }) =>
      'translateX(calc(' + (0 - step) + '*' + sizes['tabletLG'].x1 + '))'};
    height: ${sizes['tabletLG'].x1};
    ${PartnersItem} {
      min-width: ${sizes['tabletLG'].x1};
    }
  }
`
