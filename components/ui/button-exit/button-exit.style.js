import styled from "@emotion/styled";
import { colors } from "styles";
import { getCurrentMarginStyle } from "styles";

export const Exit = styled.div`
  width: 14px;
  height: 14px;
`;

export const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.white};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getCurrentMarginStyle("", "lg")}
`;
