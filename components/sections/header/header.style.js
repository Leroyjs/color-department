import { zindex, colors, getCurrentBackgroundColorStyles } from "styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

//Задает прозрачность хедеру
export const HeaderDynamicStyle = ({ transparency }) => css`
  &:before {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    content:"";
    z-index: ${zindex.backItem};
    background-color: ${colors.black};
    opacity: ${transparency};
    transition: opacity ease-out 0.25s;
  }
`

export const HeaderWrapper = styled.div`
  ${HeaderDynamicStyle};
  display : grid;
  grid-template-columns: repeat(2,1fr) 4fr 2fr;
  z-index: ${zindex.header};
  position: fixed;  
  left: 0;
  right: 0;
  max-width: 1600px;
  margin: 0 auto;
  height: 100px;
  color: ${colors.white};
`

export const Title = styled.div`
  text-transform: uppercase;
  text-align: center;
`

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

    ${({ theme }) => getCurrentBackgroundColorStyles('primary', theme)};
  }
  transition : background-color 0.5s;
`