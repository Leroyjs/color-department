import styled from "@emotion/styled";
import { getCurrentGridTemplateColumsStyle } from "styles";


export const ShopSectionWrapper = styled.div`
  width: 100%;
  display: grid;
  /* ${getCurrentGridTemplateColumsStyle()}; */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 25vw);
  align-items: start;
`;