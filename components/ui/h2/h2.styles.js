import {
  applyColor,
  applyMargins,
  applyPaddings,
  fontFamilies,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const Text = styled.span`
  font-family: ${fontFamilies.mainFont};
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("h2")};
`;
