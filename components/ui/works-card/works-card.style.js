import styled from "@emotion/styled";
import {css} from "@emotion/css";
import {applyMargins, applyPaddings, colors, getCurrentColorStyles, hexToRGBA} from "styles";
import {Caption, H2} from "components/index";

export const CardTitle = styled(H2)`
  transition: color 0.5s;
  position: relative;
  text-align: center;
  overflow: hidden;
  display: block;
  color: transparent;
  content: "content";

  &:after, &:before {
    position: absolute;
    left: 0;
    text-align: inherit;
    top: 0;
    min-width: 100%;
    white-space: nowrap;
    content: attr(data-default);
    transform: translateZ(0);
    transition: transform 0.5s;
    ${({theme}) => getCurrentColorStyles("white", theme)}
  }

  &:after {
    transform: translateY(100%) translateZ(0);
    content: attr(data-hover);
    ${({theme}) => getCurrentColorStyles("yellow", theme)}
  }
`;

export const CardCaption = styled(Caption)`
  transition: color 0.5s;
  ${({theme}) => getCurrentColorStyles("white", theme)}
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${hexToRGBA(colors.black, 0.6)};
  ${applyMargins};


  ${applyPaddings}
  &:hover {
    ${CardTitle} {
      &:after {
        transform: translateY(0%);
      }

      &:before {
        transform: translateY(-100%);
      }
    }

    ${CardCaption} {
      ${({theme}) => getCurrentColorStyles("yellow", theme)}
    }
  }
`;

export const CardTitleWrapper = css`
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
