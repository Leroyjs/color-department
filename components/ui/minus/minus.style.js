import styled from "@emotion/styled";
import { colors } from "styles";
export const IconMinus = styled.svg`
  display: inline-block;
  width: 100%;
  height: 100%;
  stroke: #ffffff;
  right: calc(50% - 26px);
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
  :hover {
    opacity: 1;
    transition: 0.3s;
  }
`;
