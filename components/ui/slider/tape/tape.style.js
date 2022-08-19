import styled from "@emotion/styled";
import {
    applyColor,
    applyMargins,
    applyPaddings,
    fontFamilies,
    getCurrentColor,
    getCurrentFontSizeStyle
} from "styles";

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
  color: ${({theme}) => getCurrentColor("white", theme)};
  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("h2")};
`;

export const TapeList = styled.ul`
  margin-top: 0;
  list-style: none;
  transition: transform 0.7s;
  transform: ${({translateY}) => `translateY(${translateY || 0}%)`};
`;

export const FrameTitle = styled.li`
  text-align: center;
  line-height: 1em;
  margin: 0;
`;
