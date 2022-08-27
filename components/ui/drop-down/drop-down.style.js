import {
  applyMargins, applyPaddings,
  colors,
  fontFamilies, fontSizes, getCurrentColor,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

const errorConditionBackgroundColor = ({isError}) =>
    isError ? `background-color: ${colors.red}; transform: scaleX(1);` : "";

export const UnderlineInner = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({isActive}) => (isActive ? 1 : 0)});
  transform-origin: left;
  background-color: ${colors.white};
  transition: transform 0.5s;

  ${errorConditionBackgroundColor}
`;

export const Underline = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${hexToRGBA(colors.white, 0.2)};
`;

export const DropDownList = styled.ul`
  position: absolute;
  left: 0;
  top: calc(100% - 2px);
  width: 100%;
  background-color: ${colors.white};
  visibility: hidden;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform .3s;
  z-index: 5;
  ${({isOpen}) => (isOpen && {
    visibility: "visible",
    transform: "scaleY(1)",
  })};

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    text-align: center;

    &:after {
      content: 'select the desired item';
      font-family: ${fontFamilies.subFont};
      font-style: normal;
      font-weight: 700;
      display: inline-block;
      text-transform: uppercase;
      ${getCurrentFontSizeStyle("caption")};
      color: ${colors.white};
      position: absolute;
      bottom: calc(100% + 24px);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: ${breakpointsWidth.phone}){
    &:after {
      bottom: calc(100% + 12px);
    }
  }
`;

export const IconPlus = styled.svg`
  display: inline-block;
  width: 26px;
  height: 26px;
  transition: stroke .3s;
  ${({isOpen, isActive, isError, theme}) => {
    if (isOpen) {
      return { stroke: colors.white };
    } else if (isActive) {
      return {stroke: getCurrentColor("primary", theme)}
    } else if (isError) {
      return { stroke: colors.red };
    } else {
      return { stroke: colors.white };
    }
  }}

  @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
    width: 26px;
    height: 26px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 26px;
    height: 26px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 26px;
    height: 26px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 12px;
    height: 12px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 1.625vw;
    width: 1.625vw;
  }
`;

export const DropDownItem = styled.li`
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${fontSizes.desktopLG.h3};
  font-family: ${fontFamilies.mainFont};
  height: 50px;
  padding: 6px 6px 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => getCurrentColor("primary", theme)};
  }

  ${({ isActive, theme }) =>
    isActive && `background-color: ${getCurrentColor("primary", theme)};`}

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 3.125vw;
    padding: 0.375vw 0.375vw 0.5vw;
  }
`;

export const CurrentLabel = styled.span`
`

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  color: ${({theme}) => theme.primary};
  text-transform: uppercase;
  font-family: ${fontFamilies.mainFont};
  ${getCurrentPaddingStyle("vertical", "xxsm")};
  font-family: ${fontFamilies.mainFont};
  text-align: left;
  transition: color 0.3s;
  
  ${({isOpen, isActive, isError, theme}) => {
    if (isOpen) {
      return {color: colors.white};
    } else if (isActive) {
      return {color: getCurrentColor("primary", theme)};
    } else if (isError) {
      return {color: colors.red};
    } else {
      return {color: hexToRGBA(colors.white, 0.2)};
    }
  }}

  ${getCurrentFontSizeStyle("h3")};

  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: scaleX(1);
    }
  }

  ${getCurrentFontSizeStyle("h3")};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    align-items: flex-end;
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

export const InputWrapper = styled.div`
  position: relative;
  ${({isFullWidth}) => isFullWidth && "width: 100%;"}
  ${applyMargins};
  ${applyPaddings}
`;
