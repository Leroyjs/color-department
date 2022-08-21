import styled from "@emotion/styled";
import {
    getCurrentMarginStyle,
    getCurrentPaddingStyle,
    getCurrentBackgroundColorStyles,
    getCurrentColor, applyMargins, applyPaddings,
} from "styles";

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)};
  ${applyMargins};
  ${applyPaddings}
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentPaddingStyle("horizontal", "md")};
`;

export const FormColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentMarginStyle("right", "md")};
`;

export const FormColumnRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)};
`;
