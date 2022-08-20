import styled from "@emotion/styled";
import {applyMargins, applyPaddings, getCurrentPaddingStyle} from "styles";


export const DropDownsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  justify-content: space-between;
  ${getCurrentPaddingStyle("horizontal", "md")}
`;

export const ColouristFilter = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-column-end: 4;
`;

export const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${applyMargins};
  ${applyPaddings}
`;


