import styled from "@emotion/styled";
import { getCurrentColorStrokeStyles } from "styles";
import {
  colors,
  applyColor,
  getCurrentBackgroundColorStyles,
  getCurrentPaddingStyle,
  getCurrentColor,
} from "styles";

export const ShopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.red};
  grid-auto-rows: 100px, auto;
  cursor: pointer;
  width: 25vw;
  height: 100%;
  /* width: 100%;
  height: 100%; */
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
  ${applyColor}
  ${getCurrentPaddingStyle("horizontal", "md1")}
  ${getCurrentPaddingStyle("vertical", "md")}
  span {
    span {
      color: ${({ theme }) => getCurrentColor("white", theme)};
    }
  }
  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
    transition: 0.3s;
    button {
      ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
        border: 2px solid ${({ theme }) => getCurrentColor("white", theme)};
      }
      svg {
        stroke: ${({ theme }) => getCurrentColor("primary", theme)};
      }
      div {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
      }
      h3 {
        color: ${({ theme }) => getCurrentColor("white", theme)};
      }
    }
    span {
      span {
        color: ${({ theme }) => getCurrentColor("black", theme)};
      }
    }
    h3 {
      span {
        color: ${({ theme }) => getCurrentColor("white", theme)};
      }
    }
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductImage = styled.div`
  width: 12.5vw;
  height: 12.5vw;
  ${getCurrentBackgroundColorStyles("white")};
`;
