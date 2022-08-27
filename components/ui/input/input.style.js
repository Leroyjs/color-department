import {
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
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

export const InputStyled = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  padding-left: 50%;
  text-transform: uppercase;
  font-family: ${fontFamilies.mainFont};
  padding-top: 4px;
  padding-bottom: 5px;

  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: scaleX(1);
    }
  }

  &::placeholder {
    font-family: ${fontFamilies.mainFont};
    color: ${hexToRGBA(colors.white, 0.2)};
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    }
  }

  ${errorConditionColor}
  ${getCurrentFontSizeStyle("h3")};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 40px;
    padding-left: 0px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 3vw;
    padding-top: 0.25vw;
    padding-bottom: 0.3125vw;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: 7px;
    padding-bottom: 1px;
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

export const Title = styled.div`
  position: absolute;
  color: ${colors.white};
  text-transform: uppercase;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-family: ${fontFamilies.mainFont};
  pointer-events: none;

  ${errorConditionColor}
  ${getCurrentFontSizeStyle("h3")};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    color: ${hexToRGBA(colors.white, 0.2)};
    transform: translateY(-60%);
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    transform: translateY(-70%);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  ${applyMargins};
  ${applyPaddings}
  ${getCurrentPaddingStyle("right", "none")};
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;
