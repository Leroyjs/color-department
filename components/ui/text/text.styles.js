import {
  applyColor,
  applyMargins,
  applyPaddings,
  fontFamilies,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const TextInner = styled.span`
  font-family: ${fontFamilies.subFont};
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  line-height: 140%;

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("text")};
`;
