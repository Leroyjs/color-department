import styled from "@emotion/styled";
import { H3 } from "components";
import { Text } from "components";
import { getCurrentColorStyles } from "styles";
import { getCurrentColor } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { getCurrentMarginStyle } from "styles";
import { getCurrentBackgroundColorStyles } from "styles";
import { applyColor } from "styles";
import { colors } from "styles";

export const ShopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.red};
  width: 400px;
  height: 400px;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  ${applyColor}
  /* padding: 32px 40px; */
  ${getCurrentPaddingStyle("horizontal", "md1")}
  ${getCurrentPaddingStyle("vertical", "md")}
  span {
    span {
      color: ${({ theme }) => getCurrentColor("white", theme)};
    }
  }
  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
    button {
      ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
      &:hover {
        ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
        border: 2px solid ${({ theme }) => getCurrentColor("yellow", theme)};
      }
      div {
        ${({ theme }) => getCurrentBackgroundColorStyles("yellow", theme)};
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

// export const ProductName = styled.h3`
//   ${getCurrentColorStyles("white")};
//   ${getCurrentPaddingStyle("Top", "32px")};
//   text-transform: uppercase;
// `;

// export const ProductPrice = styled(H3)`
//   color: ${colors.primary};
//   align-items: flex-end;
// `;
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ProductImage = styled.div`
  width: 200px;
  height: 200px;
  ${getCurrentBackgroundColorStyles("white")};
`;
