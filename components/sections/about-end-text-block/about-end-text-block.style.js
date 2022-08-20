import {
  getCurrentBackgroundColorStyles,
} from "styles";
import styled from "@emotion/styled";

export const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  width: 100%;
`;