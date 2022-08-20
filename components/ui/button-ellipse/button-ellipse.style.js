import {
  applyMargins,
  applyPaddings,
  getCurrentBackgroundColorStyles,
  getCurrentColorStyles,
  getCurrentColor,
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
`;
