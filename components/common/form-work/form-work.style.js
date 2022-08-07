import styled from "@emotion/styled";
import { H2 } from "components";
import { Text } from "components";
import { getCurrentColor } from "styles";
import { getCurrentMarginStyle } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { getCurrentBackgroundColorStyles } from "styles";

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  ${getCurrentPaddingStyle("bottom", "md")};
  h2 {
    span {
      color: ${({ theme }) => getCurrentColor("white", theme)};
      text-transform: uppercase;
      ${getCurrentMarginStyle("top", "lg")};
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
