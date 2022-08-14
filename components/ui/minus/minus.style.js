import styled from "@emotion/styled";
import { colors } from "styles";
export const IconMinus = styled.svg`
  display: inline-block;
  width: 26px;
  height: 26px;
  transition: 0.3s;
  stroke: #ffffff;
  position: absolute;
  top: 10px;
  cursor: pointer;
  opacity: 0.2;
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
