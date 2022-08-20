import styled from "@emotion/styled";
import {
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  getCurrentBackgroundColorStyles,
  getCurrentColor,
} from "styles";

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentPaddingStyle("bottom", "xlg")};
  ${getCurrentPaddingStyle("top", "xlg")};

  h2 {
    span {
      color: ${({ theme }) => getCurrentColor("white", theme)};
      text-transform: uppercase;
      ${getCurrentMarginStyle("bottom", "lg")};
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentPaddingStyle("horizontal", "md")};
  div {
    width: 100%;
  }
`;

export const FormColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentMarginStyle("right", "md")};
`;

export const FormColumnRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
`;