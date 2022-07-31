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
  border: 2px solid ${({ theme }) => getCurrentColor("primary", theme)};

  span {
    ${({ theme }) => getCurrentColorStyles("black", theme)}
  }

  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}

    span {
      ${({ theme }) => getCurrentColorStyles("primary", theme)}
    }
  }

  ${applyMargins}
  ${applyPaddings}
`;
