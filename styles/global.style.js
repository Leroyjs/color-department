import { colors } from './constants'
import { breakpointsWidth } from 'styles'
import { injectGlobal } from '@emotion/css'
import { resetStyles } from './reset.style'

export const initGlobalStyles = injectGlobal`
  ${resetStyles}
  body {
    background-color: ${colors.black};
    scroll-behavior: smooth;
  }

  a {
    color: transparent;
    text-decoration: none;
  }

  //Ширину я бы не трогал
  .map-icon-wrapper {
    div {
      width: 250px;
      text-align: center;
    }

    & p {
      color: ${colors.white};
      font-size: 16px;
      @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        font-weight: 500;
        font-size: 14px;
      }
      @media screen and (max-width: ${breakpointsWidth.photo}) {
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
`
