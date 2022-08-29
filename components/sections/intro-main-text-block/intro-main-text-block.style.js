import {
  applyMargins,
  getCurrentColor,
  getCurrentColorStyles,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentBackgroundColorStyles,
  namesOfBreakpoints,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { H2,  } from "components";
import { LeftBracket, RightBracket, Planet } from "../../common"

export const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${getCurrentPaddingStyle("top", "xlg")};
  ${getCurrentPaddingStyle("bottom", "md")};
  ${getCurrentPaddingStyle("horizontal", "md")};
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  width: 100vw;

  h2 {
    display: inline-block;
    margin: 0;
  }
`;

 export const FirstLineWrapper = styled.div`
   display: inline-block;
   text-align: center;
 `;

  export const CaptionLink = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    height: auto;
    cursor: pointer;

    svg {
      stroke: ${getCurrentColor("white")};
      transition: stroke 0.5s;
    }

    span {
      align-self: center;
      ${({ theme }) => getCurrentColorStyles("white", theme)};
      transition: color 0.5s;
    }

    &:hover {
      transition: 0.5s;
      svg {
        stroke: ${getCurrentColor("yellow")};
        transition: stroke 0.5s;
      }

      span {
        ${({ theme }) => getCurrentColorStyles("primary", theme)};
        transition: color 0.5s;
      }
    }
  `;

 export const CaptionWrapper = styled.div`
   display: inline-block;
   justify-content: center;
   align-items: flex-start;
   text-align: center;
   ${getCurrentMarginStyle("top", "lg")}
   color:${getCurrentColor("white")};
   width: auto;
   ${getCurrentMarginStyle("bottom", "sxlg")}

   span {
     color: ${getCurrentColor("white")};
   }
 `;

 export const TextWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   justify-self: flex-end;
   width: 100%;

   span {
     text-align: end;
     color: ${getCurrentColor("white")};
   }
 `;

export const StyledDesktopBR = styled.br`
  display: block;

  @media screen and (max-width: 1512px) {
    display: none;
  }
`;

export const StyledDesktopLGBR = styled.br`
  display: none;

  @media screen and (max-width: 1512px) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const StyledTabletBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: none;
  }
`;

export const StyledTabletSMBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;

export const StyledCaptionBR = styled.br`
  display: block;

  @media screen and (max-width: 608px) {
    display: none;
  }
`;

export const StyledCaptionPhoneBR = styled.br`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const StyledPhoneSMBR = styled.br`
  display: none;

  @media screen and (max-width: 365px) {
    display: block;
  }
`;

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor("white")};
  ${applyMargins};
`;

export const StyledLeftBracket = styled(LeftBracket)`
  width: 10px;
  height: 62px;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 10px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 4px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 0.625vw;
    height: 3.875vw;
  }
`;

export const StyledRightBracket = styled(RightBracket)`
  width: 10px;
  height: 62px;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 10px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 10px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 4px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    width: 0.625vw;
    height: 3.875vw;
  }
`;

export const StyledPlanet = styled(Planet)`
  width: 60px;
  height: 60px;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 52px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 3.75vw;
    height: 3.75vw;
  }
`;
