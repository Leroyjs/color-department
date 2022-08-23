import styled from "@emotion/styled";
import {
  applyColor,
  getCurrentBackgroundColorStyles,
  getCurrentPaddingStyle,
  getCurrentColor,
  getCurrentColorStyles,
  breakpointsWidth,
  getCurrentFontSizeStyle,
} from "styles";
import { Caption } from "../../ui/caption";
import { H3 } from "../../ui/h3";

export const Title = styled(Caption)`
  ${({ theme }) => getCurrentColorStyles("white", theme)};
  transition: color 0.3s;

  @media (max-width: ${breakpointsWidth.desktopLG}) {
    ${getCurrentFontSizeStyle("vw")};
  }

  @media (max-width: 900px) {
    ${getCurrentFontSizeStyle("vw2")};
  }

  @media (max-width: 500px) {
    ${getCurrentFontSizeStyle("h3")};
  }

  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const Cost = styled(H3)`
  ${getCurrentPaddingStyle("left", "xxsm")}
  ${({ theme }) => getCurrentColorStyles("primary", theme)};
  transition: color 0.3s;

  @media (max-width: 500px) {
    ${getCurrentFontSizeStyle("h2")};
    ${getCurrentPaddingStyle("left", "xxsm")}
  }

  @media (max-width: 400px) {
    ${getCurrentPaddingStyle("left", "xxsm  ")}
    display: none;
  }
`;
export const CostPhone = styled(H3)`
  display: none;
  ${({ theme }) => getCurrentColorStyles("primary", theme)};
  transition: color 0.3s;

  @media (max-width: 400px) {
    display: block;
    ${getCurrentFontSizeStyle("h2")};
  }
`;

export const ShopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s;
  cursor: pointer;
  width: 100%;
  height: calc(100vw / 4);
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
  ${applyColor}
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("vertical", "md1")}
  h3 {
    span {
      transition: color 0.3s;
    }
  }

  button {
    transition: background-color 0.3s;

    svg {
      transition: stroke 0.3s;
    }
  }

  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
    transition: color 0.3s, background-color 0.3s;

    ${Title} {
      ${({ theme }) => getCurrentColorStyles("black", theme)};
    }

    ${Cost} {
      ${({ theme }) => getCurrentColorStyles("white", theme)};
    }

    ${CostPhone} {
      ${({ theme }) => getCurrentColorStyles("white", theme)};
    }

    button {
      ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
      transition: background-color 0.3s;

      &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
        border: 2px solid ${({ theme }) => getCurrentColor("white", theme)};
      }

      svg {
        stroke: ${({ theme }) => getCurrentColor("primary", theme)};
        transition: stroke 0.3s;
      }

      div {
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
      }
    }
  }

  @media (max-width: 900px) {
    height: calc(100vw / 2);
    ${getCurrentPaddingStyle("vertical", "lg")}
    ${getCurrentPaddingStyle("horizontal", "lg")}
  }

  @media (max-width: 500px) {
    height: 100vw;
    ${getCurrentPaddingStyle("horizontal", "lg")}
    ${getCurrentPaddingStyle("vertical", "lg")}
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    ${getCurrentPaddingStyle("bottom", "sm")}
  }

  @media (max-width: 400px) {
    ${getCurrentPaddingStyle("bottom", "none")}
  }
`;

export const ProductImage = styled.div`
  flex: 0 0 auto;
  width: 12.5vw;
  height: 12.5vw;
  ${getCurrentBackgroundColorStyles("white")};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 25vw;
    height: 25vw;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    width: 50vw;
    height: 50vw;
  }
`;
