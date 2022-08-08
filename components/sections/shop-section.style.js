import styled from "@emotion/styled";
import { getCurrentGridTemplateColumsStyle } from "styles";


export const ShopSectionWrapper = styled.div`
width:100%;
  display: grid;
  ${getCurrentGridTemplateColumsStyle()};
  align-items: start ;
`;