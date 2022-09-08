import styled from "@emotion/styled";
import { breakpointsWidth, sizes } from 'styles';
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: height 0.7s, visibility 0.7s;
  height: 0;
  overflow: scroll;
  visibility: hidden;
  padding-top: calc(${sizes["desktopLG"].half} - 0.1vw);
  z-index: 100;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: calc(${sizes["tabletLG"].thirdX2} - 0.15vw);
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: calc(${sizes["tabletLG"].x1} - 0.2vw);
  }
  @media screen and (max-width: 360px) {
    padding-top: calc(${sizes["tabletLG"].x1} - 0.30vw);
  }
  ${({ isOpen }) =>
    isOpen &&
    "height: calc(100vh);height: calc(var(--fsvh, 1vh) * 100);visibility:visible;"}
`;
