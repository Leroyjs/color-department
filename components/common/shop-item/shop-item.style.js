import styled from "@emotion/styled";
import { getCurrentMarginStyle } from "styles";
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
`;

export const Cost = styled(H3)`
  ${getCurrentPaddingStyle("left", "xxsm")}
  ${({ theme }) => getCurrentColorStyles("primary", theme)};
  transition: color 0.3s;

  @media (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;
export const CostPhone = styled(H3)`
  display: none;
  ${({ theme }) => getCurrentColorStyles("primary", theme)};
  transition: color 0.3s;

  @media (max-width: ${breakpointsWidth.phone}) {
    display: block;
  }
`;

export const ShopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    height: calc(100vw / 2);
  }

  @media (max-width: 360px) {
    height: 100vw;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpointsWidth.phone}) {
    text-align: center;
    justify-content: center;
  }
`;

export const ProductImage = styled.div`
  flex: 0 0 auto;
  width: 12.5vw;
  height: 12.5vw;
  ${getCurrentBackgroundColorStyles("white")};
  ${getCurrentMarginStyle("", "shop")};

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: repeat(2, 1fr);
    width: 25vw;
    height: 25vw;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    width: 50vw;
    height: 50vw;
  }
`;
