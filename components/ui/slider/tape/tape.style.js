import {
  applyColor,
  applyMargins,
  applyPaddings,
  fontFamilies,
  getCurrentColor,
  getCurrentFontSizeStyle,
} from "styles";

import { getCurrentColorStyles } from "styles";
import styled from "@emotion/styled";

export const ViewWrapper = styled.div`
  overflow: hidden;
  height: 1em;
  padding: 0 1em;

  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => getCurrentColor("white", theme)};
  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("h2")};
`;

export const TapeList = styled.ul`
  margin-top: 0;
  list-style: none;
  transition: transform 0.7s;
  transform: ${({ translateY }) => `translateY(${translateY || 0}%)`};
`;

export const FrameTitle = styled.li`
  text-align: center;
  line-height: 1em;
  margin: 0;
  z-index: 1;
  position: relative;
  pointer-events: all;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    ${({ theme }) => getCurrentColorStyles("primary", theme)}
  }
`;
