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

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("h1")};
`;
