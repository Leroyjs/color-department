import { colors } from "styles";
import { css } from "@emotion/react";
import { hexToRGBA } from "styles";
import styled from "@emotion/styled";

export const SliderCursorWrapper = styled.div`
  position: fixed;
  opacity: 0;
  width: 1px;
  height: 1px;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: opacity 0.3s;
`;

export const SliderCursorScaleWrapper = styled.div`
  transition: transform 0.3s;
`;

export const scaleFocused = css`
  transform: scale(0.3);
`;

export const SliderCursor = styled.div`
  min-width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 1px solid ${hexToRGBA(colors.white, 0.4)};
`;
