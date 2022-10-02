import '@glidejs/glide/dist/css/glide.core.css'

import {
  applyColor,
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  getCurrentColor,
  getCurrentColorStyles,
  getCurrentFontSizeStyle,
  hexToRGBA,
  getVW,
  breakpointsWidth,
  getCurrentPaddingStyle,
} from 'styles'

import styled from '@emotion/styled'
import { Caption } from '../caption'
import { H3 } from '../h3'

export const SliderWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  ${applyMargins};
  ${applyPaddings};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: clamp(460px, 0.5vw, 0.4vh);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    height: clamp(460px, 0.5vw, 0.5vh);
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: clamp(220px, 0.6vw, 0.5vh);
  }
`

export const SliderTrack = styled.div`
  height: 100%;
  width: 100%;
`

export const SliderSlides = styled.ul`
  position: relative;
  height: 100% !important;
  width: 100% !important;
  transition: none !important;

  &--reverse .glide__slide {
    & {
      right: initial;
      left: 0;
    }
  }
`

export const SliderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  ${applyMargins};
  ${applyPaddings}
`

export const ContentTitle = styled(H3)`
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const ContentTitlePhone = styled(H3)`
  display: none;
  ${getCurrentPaddingStyle('left', 'md')};
  ${getCurrentPaddingStyle('bottom', 'md')};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: flex;
    width: 100%;
    align-items: flex-start;
    text-align: left;
    margin-top: 80px;
  }
`

export const ContentMain = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const NavBullets = styled.ul`
  pointer-events: auto;
  display: flex;
  align-items: center;
  max-width: 100%;
`

export const NavBullet = styled.button`
  color: ${hexToRGBA(colors.white, 0.4)};
  font-family: ${fontFamilies.subFont};
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  line-height: 140%;
  ${getCurrentFontSizeStyle('text')};
  position: relative;
  transition: color 0.3s;
  width: 60px;
  height: 60px;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 1px solid ${colors.white};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
  }

  &:hover {
    color: ${colors.white};
    cursor: default;
  }

  &.active {
    color: ${colors.white};
    cursor: default;

    &:after {
      transform: translate(-50%, -50%) scale(1);
      visibility: visible;
      opacity: 1;
    }
  }

  & + & {
    margin-left: 40px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(60)};
    height: ${getVW(60)};

    &:after {
      border-width: ${getVW(1)};
      width: ${getVW(60)};
      height: ${getVW(60)};
    }

    & + & {
      margin-left: ${getVW(40)};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 48px;
    height: 48px;

    &:after {
      width: 48px;
      height: 48px;
    }

    & + & {
      margin-left: 16px;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const NavPoints = styled.ul`
  pointer-events: auto;
  display: flex;
  align-items: center;

  align-self: center;
  justify-self: self-end;
  margin-top: auto;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const NavPoint = styled.button`
  width: 6px;
  height: 6px;
  border: 1px solid ${colors.white};
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  flex: 0 0 auto;
  padding: 0;
  margin: 0;

  transition: border-color 0.3s, background-color 0.3s;

  &.active {
    border-color: ${({ theme }) => getCurrentColor('primary', theme)};
    background-color: ${({ theme }) => getCurrentColor('primary', theme)};
  }

  & + & {
    margin-left: 40px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(6)};
    height: ${getVW(6)};
    border-width: ${getVW(1)};

    & + & {
      margin-left: ${getVW(40)};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
  }
`

export const ContentFooter = styled.div`
  position: relative;
  width: 100%;
`

export const NavFooterPhone = styled.div`
  display: none;
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  width: 100%;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const CurrentSlide = styled(Caption)`
  color: ${colors.white};
  margin-right: 8px;
`

export const AllSlides = styled(Caption)`
  color: ${hexToRGBA(colors.white, 0.4)};
  margin-left: 8px;
`

export const ContentFooterPhone = styled.div`
  display: none;
  width: 100%;
  ${applyMargins};
  ${applyPaddings};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
`

export const LeftCol = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(calc(-100% - 20px));

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    transform: translateX(calc(-100% - ${getVW(20)}));
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    transform: translateX(calc(-100% - 12px));
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    &.desktop {
      display: none;
    }

    position: static;
    transform: none;
    left: auto;
  }
`

export const RightCol = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 0;
  right: 50%;
  transform: translateX(calc(100% + 20px));

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    transform: translateX(calc(100% + ${getVW(20)}));
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    transform: translateX(calc(100% + 12px));
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    &.desktop {
      display: none;
    }

    position: static;
    transform: none;
    right: auto;
  }
`

export const CaptionCopyright = styled(Caption)`
  color: ${colors.white};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    font-size: 10px;
    color: ${hexToRGBA(colors.white, 0.4)};
  }
`

export const CopyrightList = styled.ul`
  position: relative;

  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 112%;
  text-transform: uppercase;
  height: 1em;

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle('h3')};
  ${({ theme }) => getCurrentColorStyles('white', theme)};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 100%;
  }
`

export const CopyrightItem = styled.li`
  height: 1em;
  top: 0;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: opacity 0.6s, visibility 0.6s;

  ${({ isRight }) =>
    isRight &&
    `
    left: auto;
    right: 0;
    
    @media screen and (max-width: ${breakpointsWidth.phone}) {
        left: 0;
        right: auto;
    }
  `};

  ${({ isLeft }) =>
    isLeft &&
    `
    right: auto;
    left: 0;
    
     @media screen and (max-width: ${breakpointsWidth.phone}) {
        right: 0;
        left: auto;
    }
  `};

  ${({ isActive }) =>
    isActive &&
    `
      visibility: visible;
      opacity: 1;
      transition-delay: 0.3s;
  `}
`
