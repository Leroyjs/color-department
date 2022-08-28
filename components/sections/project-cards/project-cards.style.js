import styled from "@emotion/styled";
import { breakpointsWidth } from "styles";
import { applyMargins, applyPaddings, getCurrentPaddingStyle } from "styles";

export const DropDownsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  justify-content: space-between;
  ${getCurrentPaddingStyle("horizontal", "md")}

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const ColouristFilter = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-column-end: 4;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;

export const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${applyMargins};
  ${applyPaddings}
`;
