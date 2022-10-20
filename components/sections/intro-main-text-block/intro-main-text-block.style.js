import {
  applyMargins,
  getCurrentColor,
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentBackgroundColorStyles,
  namesOfBreakpoints,
  breakpointsWidth,
  getVW,
} from 'styles'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import { Caption, H2 } from 'components'
import { LeftBracket, RightBracket, Planet } from '../../common'

export const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${getCurrentPaddingStyle('top', 'xlg')};
  ${getCurrentPaddingStyle('bottom', 'md')};
  ${getCurrentPaddingStyle('horizontal', 'md')};
  ${({ theme }) => getCurrentBackgroundColorStyles('black', theme)};
  width: 100vw;

  h2 {
    display: inline-block;
    margin: 0;
  }
`

export const FirstLineWrapper = styled.div`
  display: inline-block;
  text-align: center;
`

export const CaptionLink = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  height: auto;
  cursor: pointer;
  transition: 0.3s;

  svg {
    stroke: ${({ theme }) => getCurrentColor('white', theme)};
    transition: stroke 0.3s;
  }

  span {
    align-self: center;
    ${({ theme }) => getCurrentColorStyles('white', theme)};
    transition: color 0.3s;
  }

  &:hover {
    svg {
      stroke: ${({ theme }) => getCurrentColor('primary', theme)};
    }

    span {
      ${({ theme }) => getCurrentColorStyles('primary', theme)};
    }
  }
`

export const CaptionWrapper = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  ${getCurrentMarginStyle('top', 'lg')}
  color: ${getCurrentColor('white')};
  width: auto;
  line-height: 130%;

  ${getCurrentMarginStyle('bottom', 'sxlg')}
  span {
    color: ${getCurrentColor('white')};
  }

  max-width: 690px;

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    max-width: ${getVW(690)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    max-width: 590px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    max-width: 287px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  justify-self: flex-end;
  width: 100%;

  span {
    text-align: end;
    color: ${getCurrentColor('white')};
  }
`

export const StyledDesktopBR = styled.br`
  display: block;

  @media screen and (max-width: 1512px) {
    display: none;
  }
`

export const StyledDesktopLGBR = styled.br`
  display: none;

  @media screen and (max-width: 1512px) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`

export const StyledTabletBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: none;
  }
`

export const StyledTabletSMBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: block;
  }

  @media screen and (max-width: 670px) {
    display: none;
  }
`

export const StyledCaptionBR = styled.br`
  display: block;

  @media screen and (max-width: 608px) {
    display: none;
  }
`

export const StyledCaptionPhoneBR = styled.br`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`

export const StyledPhoneBR = styled.br`
  display: none;

  @media screen and (max-width: 670px) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const StyledPhoneMDBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: block;
  }

  @media screen and (max-width: 365px) {
    display: none;
  }
`

export const StyledPhoneSMBR = styled.br`
  display: none;

  @media screen and (max-width: 365px) {
    display: block;
  }
`

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor('white')};
  ${applyMargins};
`

export const StyledBrEllipse = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: inline-block;
  }
`

export const CaptionEllipse = css`
  padding-left: 0.5em;
  padding-right: 0.5em;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-top: 0.25em;
  }
`

export const StyledLeftBracket = styled(LeftBracket)`
  width: 10px;
  height: 62px;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 10px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 4px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 0.625vw;
    height: 3.875vw;
  }
`

export const StyledRightBracket = styled(RightBracket)`
  width: 10px;
  height: 62px;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 10px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 4px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    width: 0.625vw;
    height: 3.875vw;
  }
`

export const StyledPlanet = styled(Planet)`
  width: 60px;
  height: 60px;

  stroke: ${({ theme }) => getCurrentColor('white', theme)};
  transition: stroke 0.3s;

  &:hover {
    cursor: pointer;
    stroke: ${({ theme }) => getCurrentColor('primary', theme)};
  }

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 52px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 3.75vw;
    height: 3.75vw;
  }
`
