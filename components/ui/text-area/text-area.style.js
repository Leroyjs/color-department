import styled from "@emotion/styled";
import {
    breakpointsWidth,
    colors,
    fontFamilies,
    fontSizes, getCurrentColor,
    getCurrentFontSizeStyle,
    getCurrentPaddingStyle,
    getCurrentMarginStyle,
    hexToRGBA,
    applyMargins,
} from "styles";

const lineHeight = 90
export const InputWrapper = styled.div`
  position: relative;
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;

export const TextAreaInput = styled("textarea")`
  padding-top: 18px;
  margin-bottom: -20px;
  width: 100%;
  overflow: hidden;
  text-transform: uppercase;
  resize: none;
  ${getCurrentFontSizeStyle("h3")};
  font-family: ${fontFamilies.mainFont};
  color: ${({ theme }) => getCurrentColor("primary", theme)};
  line-height: ${`${lineHeight}px`};
  background-image: ${`linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${hexToRGBA(
    colors.white,
    0.2
  )} 0px)`};
  background-size: ${`100% ${lineHeight}px`};
  ${applyMargins}

  &::placeholder {
    color: ${hexToRGBA(colors.white, 0)};

    @media screen and (max-width: ${breakpointsWidth.phone}) {
      color: ${hexToRGBA(colors.white, 0.2)};
      padding-top: 2px;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: 10px;
    margin-bottom: -10px;
    line-height: 66px;
    background-image: ${`linear-gradient(transparent, transparent calc(66px - 2px), ${hexToRGBA(
      colors.white,
      0.2
    )} 0px)`};
    background-size: ${`100% 66px`};
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: 11px;
    margin-bottom: -18px;
    line-height: 48px;
    background-image: ${`linear-gradient(transparent, transparent calc(56px - 2px), ${hexToRGBA(
      colors.white,
      0.2
    )} 0px)`};
    background-size: ${`100% 56px`};
    height: 230px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 22.5vw;
    padding-top: 1vw;
    margin-bottom: -2vw;
    line-height: 5.625vw;
    background-image: ${`linear-gradient(transparent, transparent calc(5.625vw - 2px), ${hexToRGBA(
      colors.white,
      0.2
    )} 0px)`};
    background-size: ${`100% 5.625vw;`};
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    height: 22.5vw;
    padding-top: 1vw;
    margin-bottom: -2vw;
    line-height: 5.57vw;
    background-image: ${`linear-gradient(transparent, transparent calc(5.57vw - 2px), ${hexToRGBA(
      colors.white,
      0.2
    )} 0px)`};
    background-size: ${`100% 5.57vw;`};
  }
`;



export const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    font-size: ${fontSizes.desktopLG.h3};
    font-family: ${fontFamilies.mainFont};
    line-height: ${lineHeight + "px"};
    background-image: ${`linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${colors.white} 0px)`};
    background-size: ${`100% ${lineHeight}px`};
    transition: transform 0.5s;
    transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
    transform-origin: left;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    &:after {
      line-height: 66px;
      background-image: ${`linear-gradient(transparent, transparent calc(66px - 2px), ${colors.white} 0px)`};
      background-size: ${`100% 66px`};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 236px;
    &:after {
      line-height: 48px;
      background-image: ${`linear-gradient(transparent, transparent calc(56px - 2px), ${colors.white} 0px)`};
      background-size: ${`100% 56px`};
    }
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 22.5vw;
    &:after {
      line-height: 5.625vw;
      background-image: ${`linear-gradient(transparent, transparent calc(5.625vw - 2px), ${colors.white} 0px)`};
      background-size: ${`100% 5.625vw`};
    }
  }
  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    height: 22.5vw;
    &:after {
      line-height: 5.57vw;
      background-image: ${`linear-gradient(transparent, transparent calc(5.57vw - 2px), ${colors.white} 0px)`};
      background-size: ${`100% 5.57vw`};
    }
  }
`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.red};
  text-transform: uppercase;
  position: absolute;
  top: calc(100% + 4px);
  font-family: ${fontFamilies.subFont};

  ${getCurrentFontSizeStyle("caption")};
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${fontSizes.desktopLG.h3};
  font-family: ${fontFamilies.mainFont};
  color: ${(colors.white)};
  margin-bottom: 10px;

  ${getCurrentPaddingStyle("top", "xxsm")};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    ${getCurrentFontSizeStyle("h3")}
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    margin-bottom: calc(0.5vw + 2px);
    ${getCurrentFontSizeStyle("h3")}
  }
`;
