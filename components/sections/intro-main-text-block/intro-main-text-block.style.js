import {
  applyMargins,
  getCurrentColor,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentBackgroundColorStyles,
  namesOfBreakpoints,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { H2,  } from "components";
import { LeftBracket, RightBracket, Planet } from "../../common";

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

    span {
      align-self: center;
      color: ${getCurrentColor("white")};
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

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    display: none;
  }
`;

export const StyledDesktopSM = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    display: block;
  }
`;

export const StyledTabletBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: block;
  }
`;
// TODO: СДЕЛАТЬ ПЛАВНЙ ВИЗУАЛЬНЫЙ ПЕРЕХОД ДЛЯ ДЛЯ ТЕКСТА

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
    width: 6px;
    height: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 6px;
    height: 26px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 4px;
    height: 24px;
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
    width: 6px;
    height: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 6px;
    height: 26px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 4px;
    height: 24px;
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
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 26px;
    height: 26px;
  }
  
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 24px;
    height: 24px;
  }
`;

