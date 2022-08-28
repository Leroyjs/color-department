import {
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  getCurrentFontSizeStyle,
  hexToRGBA,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";

const errorConditionColor = ({ isError }) =>
  isError ? `color:${colors.red};` : "";

const errorConditionBackgroundColor = ({ isError }) =>
  isError ? `background-color: ${colors.red}; transform: scaleX(1);` : "";

export const UnderlineInner = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
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

export const IconPlus = styled.svg`
  display: inline-block;
  width: 26px;
  height: 26px;
  transition: stroke 0.3s;
  ${({ isOpen, isActive, isError }) => {
    if (isOpen) {
      return { stroke: colors.white };
    } else if (isActive) {
      return { stroke: colors.primary };
    } else if (isError) {
      return { stroke: colors.red };
    } else {
      return { stroke: colors.white };
    }
  }}
`;

export const InputStyled = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  padding-left: 50%;
  text-transform: uppercase;
  font-family: ${fontFamilies.mainFont};
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;

  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: scaleX(1);
    }
  }
  ${errorConditionColor}
  ${getCurrentFontSizeStyle("h3")};
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
  ${applyMargins};
  ${applyPaddings}
`;

export const Title = styled.div`
  position: absolute;
  color: ${colors.white};
  text-transform: uppercase;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-family: ${fontFamilies.mainFont};
  ${errorConditionColor}
  ${getCurrentFontSizeStyle("h3")};
`;

export const PlusWrapper = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 10px;
  right: 0px;
  opacity: 0.2;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    top: 5px;
  }

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

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 1.625vw;
    width: 1.625vw;
  }
`;

export const MinusWrapper = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 10px;
  right: calc(50% - 26px);
  opacity: 0.2;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    top: 5px;
  }
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

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 1.625vw;
    width: 1.625vw;
  } 
`;
