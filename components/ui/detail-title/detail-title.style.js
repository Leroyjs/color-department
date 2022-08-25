import styled from "@emotion/styled";
import {applyMargins, applyPaddings} from "styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${applyMargins};
  ${applyPaddings}
`;
