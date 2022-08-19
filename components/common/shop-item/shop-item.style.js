import styled from "@emotion/styled";
import {Caption, H3} from "components";
import {
    applyColor,
    getCurrentBackgroundColorStyles,
    getCurrentPaddingStyle,
    getCurrentColor,
    getCurrentColorStyles,
} from "styles";

export const Title = styled(Caption)`
  ${({theme}) => getCurrentColorStyles("white", theme)};
  transition: color 0.3s;
`

export const Cost = styled(H3)`
  ${({theme}) => getCurrentColorStyles("primary", theme)};
  transition: color 0.3s;
`

export const ShopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s;
  cursor: pointer;
  width: 100%;
  height: calc(100vw / 4);

  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)}
  ${applyColor}
  ${getCurrentPaddingStyle("horizontal", "md1")}
  ${getCurrentPaddingStyle("vertical", "md")}
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
    ${({theme}) => getCurrentBackgroundColorStyles("primary", theme)};
    transition: color 0.3s, background-color 0.3s;

    ${Title} {
      ${({theme}) => getCurrentColorStyles("black", theme)};
    }

    ${Cost} {
      ${({theme}) => getCurrentColorStyles("white", theme)};
    }

    button {
      ${({theme}) => getCurrentBackgroundColorStyles("white", theme)};
      transition: background-color 0.3s;

      &:hover {
        ${({theme}) => getCurrentBackgroundColorStyles("white", theme)};
        border: 2px solid ${({theme}) => getCurrentColor("white", theme)};
      }

      svg {
        stroke: ${({theme}) => getCurrentColor("primary", theme)};
        transition: stroke 0.3s;
      }

      div {
        ${({theme}) => getCurrentBackgroundColorStyles("primary", theme)};
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
  flex: 0 0 auto;
  width: 12.5vw;
  height: 12.5vw;
  ${getCurrentBackgroundColorStyles("white")};
`;
