import styled from "@emotion/styled";
import { H3, Text } from "components";
import {
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
} from "styles";

export const ShopModalInner = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export const ProductImage = styled.div`
  width: 50%;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
`;

export const InformationColumn = styled.div`
  width: 50%;
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("bottom", "md")}
  ${getCurrentPaddingStyle("top", "lg")}
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductPrice = styled(H3)`
  ${({ theme }) => getCurrentColorStyles("white", theme)};
`;

export const ProductDiscription = styled(Text)`
  width: 50%;
  ${({ theme }) => getCurrentColorStyles("white", theme)};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "md")};
`;

export const FormWrapper = styled.div`
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
`;