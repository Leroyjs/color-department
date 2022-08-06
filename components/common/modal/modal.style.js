import styled from "@emotion/styled";
import {colors} from "styles";
import {hexToRGBA} from "styles";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--fsvh, 1vh) * 100);
`;

export const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.yellow};
`;
