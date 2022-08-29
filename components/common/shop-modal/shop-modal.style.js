import styled from "@emotion/styled";
import { css } from "@emotion/css";
import {
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
  breakpointsWidth,
  colors,
  sizes
} from "styles";
import { H3 } from "../../ui/h3";
import { Text } from "../../ui/text";
import { CloseButton } from "../../ui/close-button";

export const ShopModalInner = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  background-color: ${colors.black};
  @media (max-width: ${breakpointsWidth.tabletLG}) {
    flex-direction: column;
  }
`;

export const CloseBtn = styled(CloseButton)`
  position: fixed;
  top: 0;
  left: 0;
  
  top: ${sizes["desktopLG"].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}){
      top: ${sizes["tabletLG"].thirdX2};
    }
  @media screen and (max-width: ${breakpointsWidth.phone}){
      top: ${sizes["tabletLG"].x1};
    }

  @media (max-width: ${breakpointsWidth.phone}) {
    width: 32px;
    height: 32px;
  }
`;

export const ProductImage = styled.img`
  display: inline-block;
  width: 50%;

  object-position: center top;
  object-fit: cover;

  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
  }
`;

export const InformationItem = styled.div`
  @media (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    flex-direction: row;
    display: flex;
  };

  @media (max-width: ${breakpointsWidth.phone}) {
    flex-direction: column;
  };
`;

export const InformationColumn = styled.div`
  width: 50%;
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("bottom", "md")}
  ${getCurrentPaddingStyle("top", "lg")}
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    display: flex;
    width: 100%;
    flex-direction: column;
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

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
  }
`;

export const ProductDiscriptionWrapper = css`
  width: 100%;
  ${getCurrentPaddingStyle("right", "md")};
  @media (max-width: ${breakpointsWidth.phone}) {
    ${getCurrentPaddingStyle("right", "none")}
  }
`;

export const FormWrapper = styled.form`
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
  }
`;

export const PaddingMediaPhone = styled.div`
  @media (max-width: ${breakpointsWidth.tabletLG}) {
    margin-top: 24px;
  }
`;
