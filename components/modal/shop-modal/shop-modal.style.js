import {
  breakpointsWidth,
  colors,
  getCurrentBackgroundColorStyles,
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  sizes,
} from "styles";

import { CloseButton } from "../../ui/close-button";
import { H3 } from "../../ui/h3";
import { Text } from "../../ui/text";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const ShopModalInner = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  background-color: ${colors.black};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    flex-direction: column;
  }
`;

export const CloseBtn = styled(CloseButton)`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: calc(${sizes["desktopLG"].half} + 140px);

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    margin-top: ${sizes["tabletLG"].thirdX2};
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-top: ${sizes["tabletLG"].x1};
  }

  @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
    margin-top: calc(${sizes["desktopLG"].half} + 40px);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    margin-top: calc(${sizes["tabletLG"].thirdX2} + 40px);
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 32px;
    height: 32px;
    margin-top: calc(${sizes["tabletLG"].x1} + 40px);
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    margin-top: calc(${sizes["desktopLG"].half} + 40px);
  }
`;

export const ProductImage = styled.img`
  display: inline-block;
  width: 50%;

  object-position: center;
  object-fit: cover;

  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    height: 460px;
  }
  @media (max-width: ${breakpointsWidth.phone}) {
    height: 220px;
  }
`;

export const InformationItem = styled.div`
  @media (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    flex-direction: row;
    display: flex;
  }

  @media (max-width: ${breakpointsWidth.phone}) {
    flex-direction: column;
  } ;
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
