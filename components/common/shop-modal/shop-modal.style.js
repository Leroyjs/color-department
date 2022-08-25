import styled from "@emotion/styled";
import { css } from "@emotion/css";
import {
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
  breakpointsWidth,
} from "styles";
import { H3 } from "../../ui/h3";
import { Text } from "../../ui/text";

export const ShopModalInner = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    flex-direction: column;
  }
`;

export const ProductImage = styled.div`
  width: 50%;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    width: 100%;
    height: 100%;
  }
`;

export const InformationItem = styled.div`
  @media (max-width: ${breakpointsWidth.tabletSM}) {
    width: 100%;
    flex-direction: row;
    display: flex;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  } ;
`;

export const InformationColumn = styled.div`
  width: 50%;
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("bottom", "md")}
  ${getCurrentPaddingStyle("top", "lg")}
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    ${getCurrentPaddingStyle("", "md")}
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
  ${getCurrentPaddingStyle("vertical", "md")};

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    width: 100%;
  }
`;

export const ProductDiscriptionWrapper = css`
  width: 100%;
  ${getCurrentPaddingStyle("right", "lg")};
`;

export const FormWrapper = styled.form`
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    width: 100%;
  }
`;

