import {
  applyColor,
  applyMargins,
  applyPaddings,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const button = styled.button`
  width: 740px;
  height: 60px;
  cursor: pointer;
  /* &_hover {

  } */

  ${applyMargins}
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("buttonRectangle")};
`;
