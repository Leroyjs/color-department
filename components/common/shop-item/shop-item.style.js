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
  grid-auto-rows: 100px, auto  ;
  cursor: pointer;
  transition: 0.3s;
  width:100%;
  height:100%;
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
    transition:0.3s;
    button {
      ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
      transition:0.3s;
      &:hover {
        transition:0.3s;
        ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)};
        border: 2px solid ${({ theme }) => getCurrentColor("white", theme)};

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
  width: 59%;
  height: 59%;
  ${getCurrentBackgroundColorStyles("white")};
`;
