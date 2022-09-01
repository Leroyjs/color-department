import {
  applyMargins,
  applyPaddings,
  getCurrentColor,
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
  namesOfBreakpoints,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { H2 } from "components";

export const AwardTextWrapper = styled.div`
  display: inline-block;
  text-align: center;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  width: 100vw;
  ${applyPaddings};
  ${applyMargins};

  h2 {
    display: inline-block;
    margin: 0;
  }
`;

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor("white")};
  ${applyMargins};
`;

export const StyledDesktopBR = styled.br`
  display: block;

  @media screen and (max-width: 1030px) {
    display: none;
  }
`;

export const StyledDesktopSMBR = styled.br`
  display: none;

  @media screen and (max-width: 1030px) {
    display: block;
  }

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const StyledTabletBR = styled.br`
  display: none;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;

export const StyledTabletSMBR = styled.br`
  display: none;

  @media screen and (max-width: 690px) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;