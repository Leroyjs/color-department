import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: height 0.7s, visibility 0.7s;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  ${({isOpen}) => isOpen && "height: calc(100vh);height: calc(var(--fsvh, 1vh) * 100);visibility:visible;"}
`;
