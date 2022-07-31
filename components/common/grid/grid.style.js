import { getCurrentGridTemplateColumsStyle } from "styles";
import styled from "@emotion/styled";

export const GridWrapper = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  grid-template-rows: repeat(8, 12.5vw);
  height: 100vh;
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;

  &:not(:nth-child(8)) {
    border-right: 1px solid white;
  }
`;
