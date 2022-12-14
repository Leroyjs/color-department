import styled from "@emotion/styled";
import { getCurrentBackgroundColorStyles } from "styles";
import {H2} from "../../ui/h2";

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
