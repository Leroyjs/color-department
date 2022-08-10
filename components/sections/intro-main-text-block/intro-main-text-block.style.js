import {
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
} from "styles";
import styled from "@emotion/styled";
import { H2 } from "components";
import { getCurrentColor } from "styles";

export const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${getCurrentPaddingStyle("top", "xlg")};
  ${getCurrentPaddingStyle("bottom", "md")};
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
`;

 export const FirstLineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    `;
 export const SecondLineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    `;
 export const ThirdLineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    `;

export const StyledWhiteH2 = styled(H2)`
  color:${getCurrentColor("white")};
`;
