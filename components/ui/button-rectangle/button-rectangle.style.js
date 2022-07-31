import {
  applyMargins,
  applyPaddings,
  getCurrentBackgroundColorStyles,
  getCurrentColorStyles,
  getCurrentColor,
} from "styles";

import styled from "@emotion/styled";
import { hexToRGBA } from "styles";

const isActiveStyles = ({ theme }) => `
  ${getCurrentBackgroundColorStyles("primary", theme)};
  cursor: pointer;

  span {
    ${getCurrentColorStyles("black", theme)};
  }

  &:hover {
    ${getCurrentBackgroundColorStyles("white", theme)};
    border: 2px solid ${getCurrentColor("primary", theme)};
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
`;
