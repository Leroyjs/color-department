import styled from "@emotion/styled";
import { H2 } from "components";
import { getCurrentBackgroundColorStyles } from "styles";

export const GratitudeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};

`;

export const StyledH2 = styled(H2)`
text-align: center;
`;
