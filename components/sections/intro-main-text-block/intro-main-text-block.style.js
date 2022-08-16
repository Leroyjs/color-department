import {
  applyMargins,
  getCurrentColor,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentBackgroundColorStyles,
} from "styles";
import styled from "@emotion/styled";
import { H2 } from "components";

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
    align-items: center;
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

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor("white")};
  ${applyMargins};
`;

