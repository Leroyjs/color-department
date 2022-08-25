import "@glidejs/glide/dist/css/glide.core.css";

import {
    applyColor,
    applyMargins,
    applyPaddings,
    colors,
    fontFamilies, getCurrentColor,
    getCurrentColorStyles,
    getCurrentFontSizeStyle,
    hexToRGBA,
} from "styles";

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
    & {
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
  ${applyMargins};
  ${applyPaddings}
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
  display: flex;
  align-items: center;
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
    cursor: default;

    &:after {
      transform: translate(-50%, -50%) scale(1);
      visibility: visible;
      opacity: 1;
    }
  }

  & + & {
    margin-left: 40px;
  }
`;

export const NavPoints = styled.ul`
  pointer-events: auto;
  display: flex;
  align-items: center;

  align-self: center;
  justify-self: self-end;
  margin-top: auto;
`;

export const NavPoint = styled.button`
  width: 6px;
  height: 6px;
  border: 1px solid ${colors.white};
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  flex: 0 0 auto;
  padding: 0;
  margin: 0;

  transition: border-color 0.3s, background-color 0.3s;

  &.active {
    border-color: ${({theme}) => getCurrentColor("primary", theme)};
    background-color: ${({theme}) => getCurrentColor("primary", theme)};
  }

  & + & {
    margin-left: 40px;
  }
`;

export const ContentFooter = styled.div`
  position: relative;
  width: 100%;
`;

export const LeftCol = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(calc(-100% - 20px));

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RightCol = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 0;
  right: 50%;
  transform: translateX(calc(100% + 20px));
`;

export const CopyrightList = styled.ul`
  position: relative;

  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 112%;
  text-transform: uppercase;
  height: 1em;

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("h3")};
  ${({theme}) => getCurrentColorStyles("white", theme)};
`;

export const CopyrightItem = styled.li`
  height: 1em;
  top: 0;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: opacity 0.6s, visibility 0.6s;

  ${({isRight}) =>
          isRight &&
          `
    left: auto;
    right: 0;
  `}

  ${({isLeft}) =>
          isLeft &&
          `
    right: auto;
    left: 0;
  `}

  ${({isActive}) =>
          isActive &&
          `
      visibility: visible;
      opacity: 1;
      transition-delay: 0.3s;
  `}
`;
