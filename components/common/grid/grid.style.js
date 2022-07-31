import { colors } from "styles";
import { getCurrentGridTemplateColumsStyle } from "styles";
import { hexToRGBA } from "styles";
import styled from "@emotion/styled";

export const GridWrapper = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  grid-template-rows: repeat(8, 12.5vw);
  height: 100vh;
  overflow: hidden;
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};

  &:not(:nth-of-type(8n)) {
    border-right: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }
`;
