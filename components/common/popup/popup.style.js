import styled from "@emotion/styled";
import { H2 } from "components";
import { Text } from "components";
import { getCurrentColor } from "styles";
import { getCurrentMarginStyle } from "styles";
import { getCurrentBackgroundColorStyles } from "styles";

export const GratitudeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  h2 {
    span {
      color: ${({ theme }) => getCurrentColor("primary", theme)};
      ${getCurrentMarginStyle("bottom", "md")}
    }
  }
`;

// export const GratitudeWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   text-align: center;
  
// `;

