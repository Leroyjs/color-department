import { H3 } from "../h3";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { breakpointsWidth } from "styles";

export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: calc(50vw * 0.56);

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-auto-rows: calc(50vw * 0.59);
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: calc(100vw * 220/360);
  }
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
