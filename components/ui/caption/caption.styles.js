import {
  applyColor,
  applyMargins,
  applyPaddings,
  fontFamilies,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const Text = styled.span`
  font-family: ${fontFamilies.subFont};
  font-style: normal;
  font-weight: 700;
  display: inline-block;
  text-transform: uppercase;

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("caption")};
`;
