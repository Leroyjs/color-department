import styled from "@emotion/styled";
import { breakpointsWidth } from "styles";
import { colors } from "styles";

export const IconMinus = styled.svg`
  display: inline-block;
  width: 100%;
  height: 100%;
  stroke: ${colors.white};
  right: calc(50% - 26px);
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

  &:hover {
    opacity: 1;
    transition: 0.3s;
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
