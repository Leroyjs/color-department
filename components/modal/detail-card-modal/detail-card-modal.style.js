import styled from "@emotion/styled";
import {
    applyMargins,
    applyPaddings, colors,
    getCurrentBackgroundColorStyles,
    getCurrentMarginStyle, getCurrentPaddingStyle, hexToRGBA
} from "styles";
import {Avatar} from "../../ui/avatar";
import {Caption, Modal, Text} from "components";
import {CloseButton} from "../../ui/close-button";

export const CloseBtn = styled(CloseButton)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  ${getCurrentMarginStyle("bottom", "md")};
`;

export const Wrapper = styled.div`
  width: 100%;
  ${applyMargins};
  ${applyPaddings};
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentMarginStyle("top", "md")};
  ${getCurrentPaddingStyle("horizontal", "md")};
  ${getCurrentMarginStyle("bottom", "xlg")};
  padding-top: 100px;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const User = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Description = styled.div`
  width: 100%;
`;

export const TextRow = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
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
    content: '';
    bottom: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='2' fill='none'%3E%3Cpath stroke='%23fff' stroke-dasharray='2 10' stroke-width='2' d='M0 1h760' opacity='.2'/%3E%3C/svg%3E");
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
  display: block;
  ${getCurrentMarginStyle("left", "md")};
`;
