import styled from "@emotion/styled";
import {
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
} from "styles";
import { H3 } from "../../ui/h3";
import { Text } from "../../ui/text";

export const ShopModalInner = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction:column;
  }
`;

export const ProductImage = styled.div`
  width: 50%;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};

  @media (max-width: 768px) {
    width:100%;
    height:100%;
  }
`;
export const InformationItem = styled.div`

 @media (max-width: 768px) {
  width: 100%;
    flex-direction: row;
    display: flex;
 }
`;

export const InformationColumn = styled.div`
  width: 50%;
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("bottom", "md")}
  ${getCurrentPaddingStyle("top", "lg")}
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};

  @media (max-width: 768px) {
    display: flex;
    width:100%;
    flex-direction: column;
    height: 100%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.form`
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}

  @media (max-width: 768px) {
  width: 100%;
  }
`;
