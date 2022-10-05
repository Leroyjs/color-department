import { css } from '@emotion/css'
import styled from '@emotion/styled'
import {
  colors,
  zindex,
  hexToRGBA,
  sizes,
  getCurrentGridTemplateColumsStyle,
  breakpointsWidth,
} from 'styles'

export const MenuWrapper = styled.div`
  margin: 0 auto;
  left: 0;
  right: 0;
  position: fixed;
  z-index: ${zindex.modal};
  overflow: hidden;
  height: ${({ isOpen }) =>
    isOpen
      ? `
        height: 100vh;
        height: calc(var(--fsvh, 1vh) * 100);
    `
      : '0'};

  background-color: ${colors.black};
  transition: height 0.7s;
`

export const MenuMap = styled.div`
  position: relative;
  grid-column: 5/9;
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-column: 1/5;
  justify-content: center;
  border-right: 1px solid ${hexToRGBA(colors.white, 0.2)};
  margin-top: -${sizes['tabletLG'].thirdX2};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    margin-top: -${sizes['tabletLG'].thirdX2};
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-right: none;
    margin-top: 1vw;
  }
`
export const MenuBody = styled.nav`
  margin-top: ${sizes['desktopLG'].half};
  width: 100%;
  min-height: 100%;
  display: grid;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    margin-top: ${sizes['tabletLG'].thirdX2};

    ${MenuMap} {
      grid-column: 3/5;
    }

    ${MenuList} {
      grid-column: 1/3;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-top: ${sizes['desktopLG'].x2};
    min-height: auto;

    ${MenuMap} {
      display: none;
    }

    ${MenuList} {
      grid-column: 1/-1;
      justify-content: center;
    }
  }
  ${getCurrentGridTemplateColumsStyle()};
`

export const MenuFooter = styled.div`
  width: 100%;
  min-height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity ease-in 0.2s;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    min-height: auto;
  }
`

export const HideForMobile = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`

export const ShowForMobile = styled.span`
  display: none;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: block;
  }
`
