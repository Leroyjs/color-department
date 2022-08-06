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

export const ModalShopWrapper = styled.div`
width:100%;
display:flex;
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => getCurrentBackgroundColorStyles("yellow", theme)};
`;


export const FormWrapper = styled.div`
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("bot", "md")}
  ${getCurrentPaddingStyle("top", "lg")}
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
`;
// export const ModalShopWrapper = styled.div``;
// export const ModalShopWrapper = styled.div``;
// export const ModalShopWrapper = styled.div``;