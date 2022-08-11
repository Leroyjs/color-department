import {
  applyMargins,
  getCurrentColor,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentBackgroundColorStyles,
} from "styles";
import styled from "@emotion/styled";
import { H2 } from "components";

export const AwardTextWrapper = styled.div`
  display: inline-block;
  text-align: center;
  ${getCurrentPaddingStyle("vertical", "xlg")};
  ${getCurrentPaddingStyle("horizontal", "md")};
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  width: 100vw;

  h2 {
    display: inline-block;
    margin: 0;
  }
`;

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor("white")};
  ${applyMargins};
`;
