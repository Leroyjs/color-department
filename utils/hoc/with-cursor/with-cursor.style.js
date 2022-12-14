import {breakpointsWidth, colors, getVW} from "styles";
import {css} from "@emotion/react";
import {hexToRGBA} from "styles";
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

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(1)};
    height ${getVW(1)};
  }
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

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-width: ${getVW(1)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: none;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;
