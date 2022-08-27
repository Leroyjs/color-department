import styled from "@emotion/styled";
import { breakpointsWidth } from "styles";
import { colors } from "styles";

export const IconPlus = styled.svg`
  display: inline-block;
  cursor: pointer;
  ${({ isOpen, isActive, isError }) => {
    if (isOpen) {
      return { stroke: colors.white };
    } else if (isActive) {
      return { stroke: colors.yellow };
    } else if (isError) {
      return { stroke: colors.red };
    } else {
      return { stroke: colors.white };
    }
  }}

  &:hover {
    transition: 0.3s;
    opacity: 1;
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
