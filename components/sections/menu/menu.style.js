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

  .leaflet-map-pane {
    z-index: 0;
  }
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-column: 1/5;
  justify-content: center;
  border-right: 1px solid ${hexToRGBA(colors.white, 0.2)};
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-right: none;
  }
`
export const MenuBody = styled.nav`
  top: ${sizes['desktopLG'].half};
  width: 100%;
  position: absolute;
  display: grid;
  height: calc(100vh - ${sizes['desktopLG'].x1});
  height: calc(var(--fsvh, 1vh) * 100 - ${sizes['desktopLG'].x1});

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    top: ${sizes['tabletLG'].thirdX2};
    height: calc(
      100vh - ${sizes['tabletLG'].thirdX2} - ${sizes['tabletLG'].thirdX1}
    );
    height: calc(
      var(--fsvh, 1vh) * 100 - ${sizes['tabletLG'].thirdX2} -
        ${sizes['tabletLG'].thirdX1}
    );

    ${MenuMap} {
      grid-column: 3/5;
    }

    ${MenuList} {
      grid-column: 1/3;
    }
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    top: ${sizes['desktopLG'].x2};
    height: calc(100vh - ${sizes['tabletLG'].x2} - 83px);
    height: calc(var(--fsvh, 1vh) * 100 - ${sizes['tabletLG'].x2} - 83px);

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
  position: absolute;
  width: 100%;
  bottom: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity ease-in 0.2s;
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
