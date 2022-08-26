import { colors } from "styles";
import { getCurrentGridTemplateColumsStyle, size, breakpointsWidth } from "styles";
import { hexToRGBA } from "styles";
import styled from "@emotion/styled";

export const GridWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const GridInner = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  grid-template-rows: repeat(10, 12.5vw);
  align-content: end;
  height: 100%;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}){
    grid-template-rows: repeat(10, 25vw);    
  }
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${hexToRGBA(colors.white, 0.2)};

  &:not(:nth-of-type(8n)) {
    border-right: 1px solid ${hexToRGBA(colors.white, 0.2)};
  }
`;
