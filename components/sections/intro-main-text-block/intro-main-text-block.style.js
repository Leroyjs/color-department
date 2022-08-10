import {
  sizes,
  colors,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyles,
  getCurrentBackgroundColorStyles,
} from "styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

//Задает прозрачность хедеру
export const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${getCurrentPaddingStyles("top", "xlg")};
  ${getCurrentPaddingStyles("bottom", "md")};
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