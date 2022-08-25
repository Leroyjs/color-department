import styled from "@emotion/styled";
import { colors } from "styles";

export const IconPlus = styled.svg`
  display: inline-block;
  width: 100%;
  height: 100%;
  min-width: 12px;
  min-height: 12px;
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
`;
