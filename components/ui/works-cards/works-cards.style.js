import { H3 } from "../h3";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 450px;
`;

export const WorksTitleWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorksTitle = styled(H3)`
  text-transform: uppercase;
`;

export const WorksWrapper = styled.div`
  width: 100%;
`;
