import styled from "@emotion/styled";
import {applyMargins, applyPaddings} from "styles";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);

  ${applyMargins};
  ${applyPaddings}
`;


export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
