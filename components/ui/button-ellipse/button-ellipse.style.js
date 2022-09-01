import {
  applyMargins,
  applyPaddings,
  getCurrentBackgroundColorStyles,
  getCurrentColorStyles,
  getCurrentColor,
  breakpointsWidth
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  cursor: pointer;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)}
  border: 1px solid ${({ theme }) => getCurrentColor("primary", theme)};
  transition: background-color 0.3s;

  span {
    ${({ theme }) => getCurrentColorStyles("black", theme)}
    transition: color 0.3s;
  }

  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
    transition: background-color 0.3s;

    span {
      ${({ theme }) => getCurrentColorStyles("primary", theme)}
      transition: color 0.3s;
    }
  }

  ${applyMargins}
  ${applyPaddings}

  @media screen and (min-width: ${breakpointsWidth.desktopXXLG}) {
    width: 9.375vw;
    height: 9.375vw;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopXLG}) {
    width: 180px;
    height: 180px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 140px;
    height: 140px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 80px;
    height: 80px;
  }
`;
