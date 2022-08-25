import styled from "@emotion/styled";
import {css} from "@emotion/css";
import {applyMargins, applyPaddings} from "styles";
import {Caption} from "../caption";

export const TextWrapper = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Caption)`
  text-align: center;
  ${applyMargins};
  ${applyPaddings}
`;
