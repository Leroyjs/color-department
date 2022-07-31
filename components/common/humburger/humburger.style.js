import {
    colors,
    fontFamilies,
    getCurrentFontSizeStyle,
    hexToRGBA,
} from "styles";

import styled from "@emotion/styled";

export const HumburgerWrapper = styled.div`
  width: 24px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &: hover {
    transform: rotate(90deg);
  }
  transition: transform 0.5s;
`

export const HumburgerLine = styled.div`
  width: 24px;
  height: 2px;
  background-color: white;
`