import {
  breakpointsWidth,
  colors,
  getCurrentBackgroundColorStyles,
  getCurrentGridTemplateColumsStyle,
  hexToRGBA,
  sizes,
  zindex,
} from "styles";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

//Задает прозрачность хедеру
export const HeaderDynamicStyle = ({ transparency }) => css`
  &:before {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    content: "";
    z-index: ${zindex.backItem};
    background-color: ${colors.black};
    opacity: ${transparency};
    transition: opacity ease-out 0.25s;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  text-align: center;
`;

export const HeaderItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    & span {
      color: ${colors.black};
      transition: color 0.5s;
    }

    .blob-svg {
      fill: ${colors.black};
      transition: fill 0.5s;
    }

    .humburger {
      & *:nth-of-type(1n) {
        background-color: ${colors.black};
        transition: background-color 0.5s;
      }
    }

    ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
  }
  transition: background-color 0.5s;
`;

export const HeaderItemHumburger = styled(HeaderItem)`
  grid-column: 1/2;
`;
export const HeaderItemBlob = styled(HeaderItem)`
  grid-column: 2/3;
`;
export const HeaderItemTitle = styled(HeaderItem)`
  grid-column: 3/7;
`;
export const HeaderItemLetsGo = styled(HeaderItem)`
  grid-column: 7/9;
`;

export const HeaderWrapper = styled.header`
  ${getCurrentGridTemplateColumsStyle()};
  ${HeaderDynamicStyle};
  display: grid;
  z-index: ${zindex.header};
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: ${sizes['desktopLG'].half};
  color: ${colors.white};
  
  border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
  & > *:nth-of-type(1n) {
    border-right: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }
  & > *:nth-of-type(1) {
    border-left: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-rows: repeat(2, ${sizes['tabletLG'].thirdX1});
    height: ${sizes['tabletLG'].thirdX2};
    ${HeaderItemTitle} {
      grid-row: 1/2;
      grid-column: 1/-1;
      border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
    }
    ${HeaderItemHumburger} {
      grid-column: 1/2;
    }
    ${HeaderItemBlob} {
      grid-column: 2/3;
    } 
    ${HeaderItemLetsGo} {
      grid-column: 3/5;
    }
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    ${Title}{
      max-width: 10vw;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.desktopXLG}) {
    ${Title}{
      max-width: 200px;
    }
  }

  @media screen and (max-width: 1700px) {
    ${Title}{
      max-width: 180px;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    ${Title}{
      max-width:none;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-rows: repeat(2, ${sizes['tabletLG'].half});
    height: ${sizes['tabletLG'].x1};
  }
`;
