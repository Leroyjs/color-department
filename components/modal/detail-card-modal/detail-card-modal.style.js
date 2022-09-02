import {
    applyMargins,
    applyPaddings, breakpointsWidth,
    colors,
    getCurrentBackgroundColorStyles,
    getCurrentMarginStyle,
    getCurrentPaddingStyle,
    hexToRGBA,
} from "styles";

import {Avatar} from "../../ui/avatar";
import {Caption} from "../../ui/caption";
import {CloseButton} from "../../ui/close-button";
import {Modal} from "../../common/modal";
import {Text} from "../../ui/text";
import styled from "@emotion/styled";
import {H2} from "../../ui/h2";

export const CloseBtn = styled(CloseButton)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  ${getCurrentMarginStyle("bottom", "md")};
  ${getCurrentMarginStyle("top", "lg")};
`;

export const Wrapper = styled.div`
  width: 100%;
  ${applyMargins};
  ${applyPaddings};
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentMarginStyle("top", "md")};
  ${getCurrentPaddingStyle("horizontal", "md")};
  ${getCurrentMarginStyle("bottom", "xlg")};
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-columns: auto;
    gap: 32px;
  }
`;

export const UserName = styled(H2)`
  ${getCurrentPaddingStyle("bottom", "sm")};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    ${getCurrentPaddingStyle("bottom", "xxsm")};
  }
`;

export const User = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: auto;
    gap: 24px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    justify-content: center;
    justify-items: center;
    gap: 16px;
  }
`;

export const Description = styled.div`
  width: 100%;
`;

export const TextRow = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: auto;
    gap: 24px;
  }
`;

export const ProfileLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${getCurrentPaddingStyle("top", "xsm")};
  ${getCurrentMarginStyle("top", "md")};

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 0.17vw;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='10' fill='none'%3E%3Cpath stroke='%23fff' stroke-dasharray='0.3vw 1.6vw' stroke-width='150vw' d='M0 1h2500w' opacity='.2'/%3E%3C/svg%3E");
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: auto;
    margin-top: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-top: 32px;
  }
`;

export const TextCol = styled(Text)`
  width: 100%;
`;

export const ModalWrapper = styled(Modal)`
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)};
  overflow-y: scroll;
`;

export const CaptionLink = styled(Caption)`
  color: ${hexToRGBA(colors.white, 0.4)};;
`;

export const UserAvatar = styled(Avatar)``;

export const UserAbout = styled.div`
  order: 1;
  display: block;
  ${getCurrentMarginStyle("left", "md")};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    margin: 0;
    grid-column-start: 1;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    text-align: center;
  } ;
`;
