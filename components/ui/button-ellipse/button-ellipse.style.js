import {
  applyColor,
  applyMargins,
  applyPaddings,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const button = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  cursor: pointer;
  /* &_hover {

  } */

  ${applyMargins}
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("buttonEllipse")};
`;
