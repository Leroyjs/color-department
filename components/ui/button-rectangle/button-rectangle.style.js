import {
  applyMargins,
  applyPaddings,
  getCurrentBackgroundColorStyles,
  getCurrentColorStyles,
  getCurrentColor,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";
import { hexToRGBA } from "styles";

const isActiveStyles = ({ theme }) => `
  ${getCurrentBackgroundColorStyles("primary", theme)};
  cursor: pointer;
  border: 1px solid ${getCurrentColor("primary", theme)};
  transition: background-color 0.3s;

  span {
    ${getCurrentColorStyles("black", theme)};
    transition: color 0.3s;
  }

  &:hover {
    ${getCurrentBackgroundColorStyles("black", theme)};
    transition: background-color 0.3s;

    span {
    ${getCurrentColorStyles("primary", theme)};
    transition: color 0.3s;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) =>
    hexToRGBA(getCurrentColor("white", theme), 0.08)};
  cursor: default;

  span {
    ${({ theme }) => getCurrentColorStyles("black", theme)};
  }

  ${({ isDisabled }) => (isDisabled ? "" : isActiveStyles)};
  ${applyMargins}
  ${applyPaddings}
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 48px;
  }
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 48px;
  }
`;
