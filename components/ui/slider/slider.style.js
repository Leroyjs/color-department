import "@glidejs/glide/dist/css/glide.core.css";

import {
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  getCurrentFontSizeStyle,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
} from "styles";

import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const SliderWrapper = styled.div`
  height: calc(100vh);
  height: calc(var(--fsvh, 1vh) * 100);
  width: 100%;
  ${applyMargins};
  ${applyPaddings}
`;

export const SliderTrack = styled.div`
  height: 100%;
  width: 100%;
`;

export const SliderSlides = styled.ul`
  position: relative;
  height: 100% !important;
  width: 100% !important;
  transition: none !important;

  &--reverse .glide__slide {
    &,
    &__img {
      right: initial;
      left: 0;
    }
  }
`;

export const SliderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${hexToRGBA(colors.black, 0.6)};
  pointer-events: none;
`;

export const ContentMain = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavBullets = styled.ul`
  pointer-events: auto;
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
`;

export const NavBullet = styled.button`
  color: ${hexToRGBA(colors.white, 0.4)};
  font-family: ${fontFamilies.subFont};
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  line-height: 140%;
  ${getCurrentFontSizeStyle("text")};
  position: relative;
  transition: color 0.3s;
  width: 60px;
  height: 60px;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 1px solid ${colors.white};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
  }

  &.active {
    color: ${colors.white};

    &:after {
      transform: translate(-50%, -50%) scale(1);
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: center;
  ${getCurrentPaddingStyle("bottom", "md")};
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${getCurrentMarginStyle("left", "md")};
`;
