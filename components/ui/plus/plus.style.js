import styled from "@emotion/styled";
import { colors } from "styles";
export const IconPlus = styled.svg`
  display: inline-block;
  width: 26px;
  height: 26px;
  transition: stroke 0.3s;
  stroke: #ffffff;
  position: absolute;
  top: 10px;
  right: 0px;
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
`;
