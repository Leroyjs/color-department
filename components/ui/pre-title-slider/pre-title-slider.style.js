import styled from '@emotion/styled'
import { css } from '@emotion/css'
import { applyMargins, applyPaddings, breakpointsWidth, getVW } from 'styles'
import { Caption } from '../caption'

export const TextWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 338px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  line-height: 130%;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    max-width: ${getVW(338)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    max-width: 290px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    max-width: 236px;
    span {
      font-size: 10px;
    }
  }
`

export const Text = styled(Caption)`
  text-align: center;
  ${applyMargins};
  ${applyPaddings}
`
