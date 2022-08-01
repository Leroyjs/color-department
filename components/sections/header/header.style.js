import {
  colors,
  fontFamilies,
  getCurrentFontSizeStyle,
  hexToRGBA,
  getCurrentColor,
  getCurrentBackgroundColorStyles
} from "styles";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

//Задает прозрачность хедеру
export const HeaderDynamicStyle = props => css`
  &:before {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    content:"";
    z-index: -1;
    background-color: ${hexToRGBA(colors.black, 1)};
    opacity: ${props.transparency};
    transition: opacity ease-out 0.25s;
  }
`

export const HeaderWrapper = styled.div`
  ${HeaderDynamicStyle};
  z-index: 100;
  position: fixed;  
  left: 0;
  right: 0;
  max-width: 1600px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  color: white;
`

export const Title = styled.div`
  text-transform: uppercase;

  span {
    display: block;
    text-align: center;
    line-height: 112%;
  }
`

//TODO на гриды
const HeaderItemWidth = props => {
  let size = 200;
  if (props.m) { size = 400 }
  else if (props.l) { size = 800 }
  return `max-width: ${size}px`;
}


export const HeaderItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    & span {
      color: ${colors.black};
      transition : color 0.5s;    
    } 

    .blob-svg {
      fill: ${colors.black};
      transition: fill 0.5s;
    }

    .humburger-btn {

    }

    ${({ theme }) => getCurrentBackgroundColorStyles('primary', theme)};
  }

  transition : background-color 0.5s, color 0.5s;

  ${HeaderItemWidth}
`