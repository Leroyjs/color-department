import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { colors } from 'styles'
import {
  getCurrentGridTemplateColumsStyle,
  getCurrentPaddingStyle,
  sizes,
  breakpointsWidth,
} from 'styles'
import { applyPaddings } from 'styles'
import { applyMargins } from 'styles'
import { getVW } from 'styles'
import { Caption } from '../../ui/caption'

export const FooterWrapper = styled.div`
  background-color: ${colors.black};
  display: grid;
  flex-direction: column;
  position: relative;
  z-index: 0;
  ${getCurrentGridTemplateColumsStyle()};
  ${applyPaddings};
  ${applyMargins};
`

export const FooterInfoWrapper = styled.div`
  grid-column: 1/-1;
  position: relative;
`

export const FooterLogo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  ${getCurrentPaddingStyle('bottom', 'md')};
`

export const FoxWrapper = styled.div`
  ${getCurrentPaddingStyle('vertical', 'md')};
`

export const FoxWrapperMap = styled.a`
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  min-width: 240px;
  ${getCurrentPaddingStyle('vertical', 'md')};
  outline: none;
  border: none;
  box-shadow: none;

  &:visited {
    outline: none;
    border: none;
    box-shadow: none;
  }
`

export const FoxStyle = css`
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(200)};
    height: ${getVW(200)};
  }
  @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 192px;
    height: 192px;
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 90px;
    height: 90px;
  }
`

export const FoxStyleMap = css`
  width: 92px;
  height: 92px;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(92)};
    height: ${getVW(92)};
  }
`

export const HideForMobile = styled.div`
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const FoxTitleDA = styled(Caption)`
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const FoxTitleMobile = styled(Caption)`
  text-align: center;
  display: none;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: inline-block;
  }
`
