import styled from "@emotion/styled";
import { breakpointsWidth } from "styles";
import { colors } from "styles";
import { getCurrentMarginStyle } from "styles";

export const Exit = styled.div`
  width: 14px;
  height: 14px;
`;

export const ButtonWrapper = styled.button`
  top: 40px;
  left: 40px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.white};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    top: 24px;
    left: 24px;
  }
`;
