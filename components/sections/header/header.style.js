import {
  colors,
  fontFamilies,
  getCurrentFontSizeStyle,
  hexToRGBA,
} from "styles";

import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const HeaderDynamicStyle = props => css`
  &: before {
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
  ${getCurrentFontSizeStyle("h3")};
  text-transform: uppercase;
  
  max-width: 800px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;
    text-align: center;
    line-height: 112%;
  }
`

const ButtonDynamicStyle = props =>
  css`
    max-width: ${props.lg ? 400 : 200}px;
    
    ${(props.hover) ? `&: hover { 
      background-color: ${colors.yellow};
      color: ${colors.black};
    }` : ""}

    ${props.active ? `
      background-color: ${colors.yellow};
      color: ${colors.black};      
      ` : ""}
    
    transition : background-color 0.3s, color 0.3s;
  
`

export const ButtonWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${ButtonDynamicStyle};
`