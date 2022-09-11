import styled from "@emotion/styled";
import { Caption, H2 } from 'components'
import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  fontFamilies,
  getCurrentBackgroundColorStyles,
  getCurrentColor,
  getCurrentColorStyles,
  getCurrentFontSizeStyle,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  getVW,
  hexToRGBA,
  zindex,
} from 'styles'

import { ImageBox } from '../../common'

export const AwardsContainer = styled.div`
  display: block;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`

export const AwardsTitle = styled(H2)`
  display: inline-block;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  ${applyMargins};
  ${applyPaddings};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-bottom: 32px;
  }
`

export const AwardsSubTitle = styled(Caption)`
  display: inline-block;
  text-transform: uppercase;
  text-align: left;

  /* ${applyMargins}
  ${applyPaddings} */
`

export const ListStyled = styled.ul`
  display: block;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`

export const LabelStart = styled.span`
  ${({ theme }) => getCurrentColorStyles('white', theme)}

  pointer-events: none;
  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;
  text-transform: uppercase;
  ${getCurrentFontSizeStyle('h3')};
  transition: color 0.3s;
`

export const FlexControl = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
`

export const LabelEnd = styled.span`
  color: ${hexToRGBA(colors.white, 0.2)};

  pointer-events: none;
  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;
  text-transform: uppercase;
  ${getCurrentFontSizeStyle('h3')};
  transition: color 0.3s;
`

export const PopOver = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zindex.popOver};
  width: 400px;
  height: 0px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border: none;
  box-shadow: none;
  transition: height 0.35s;

  &.isShow {
    height: 400px;
  }

  ${({ theme }) => getCurrentBackgroundColorStyles('white', theme)};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(400)};

    &.isShow {
      height: ${getVW(400)};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`

export const AboutPhoneImg = styled.img`
  display: none;
  object-fit: cover;
  object-position: center top;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: inline-block;
    width: 64px;
    min-width: 64px;
    height: 64px;
    ${getCurrentMarginStyle('right', 'md')};
    border-radius: 50%;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 48px;
    min-width: 48px;
    height: 48px;
  }
`

export const Item = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  ${getCurrentPaddingStyle('horizontal', 'md')};
  ${getCurrentPaddingStyle('vertical', 'md1')};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'default')};
  transition: background-color 0.3s, border-top-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${hexToRGBA(colors.white, 0.2)};

  ${({ theme }) => getCurrentBackgroundColorStyles('black', theme)}

  &:hover {
    @media screen and (min-width: ${breakpointsWidth.tabletSM}) {
      ${({ theme }) => getCurrentBackgroundColorStyles('primary', theme)}
      border-top-color: ${({ theme }) => getCurrentColor('primary', theme)};

      span:first-of-type {
        ${({ theme }) => getCurrentColorStyles('black', theme)}
      }

      span:last-of-type {
        ${({ theme }) => getCurrentColorStyles('white', theme)}
      }
    }
  }

  &:last-child {
    border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: ${getVW(100)};
    border-width: ${getVW(1)};

    &:last-child {
      border-width: ${getVW(1)};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 80px;
    justify-content: flex-start;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 64px;
  }
`

export const PopOverImg = styled(ImageBox)`
  pointer-events: none;
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border: none;
  box-shadow: none;
  
  img {
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(400)};
    height: ${getVW(400)};
  }
`
