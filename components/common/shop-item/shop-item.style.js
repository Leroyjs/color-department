import styled from "@emotion/styled";
import {
  applyColor,
  getCurrentBackgroundColorStyles,
  getCurrentPaddingStyle,
  getCurrentColor,
  getCurrentColorStyles,
} from "styles";

export const ShopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  grid-auto-rows: 100px, auto;
  cursor: pointer;
  width: 25vw;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
  ${applyColor}
  ${getCurrentPaddingStyle("horizontal", "md1")}
  ${getCurrentPaddingStyle("vertical", "md")}

  span {
    span {
      ${({ theme }) => getCurrentColorStyles("white", theme)};
    }
  }

  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
    transition: 0.3s;

    button {
      ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
      transition: 0.3s;

      &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
        border: 2px solid ${({ theme }) => getCurrentColor("white", theme)};
      }

      svg {
        stroke: ${({ theme }) => getCurrentColor("primary", theme)};
        transition: 0.3s;
      }

      div {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
      }

      h3 {
        ${({ theme }) => getCurrentColorStyles("white", theme)};
        transition: 0.3s;
      }

    }
    span {
      span {
        ${({ theme }) => getCurrentColorStyles("black", theme)};
        transition: 0.3s;
      }
    }

    h3 {
      span {
        ${({ theme }) => getCurrentColorStyles("white", theme)};
        transition: 0.3s;
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
