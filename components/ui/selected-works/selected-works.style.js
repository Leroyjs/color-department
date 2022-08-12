import styled from "@emotion/styled";
import {applyMargins, applyPaddings, getCurrentBackgroundColorStyles, getCurrentPaddingStyle} from "styles";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${({theme}) => getCurrentBackgroundColorStyles("black", theme)}
  ${getCurrentPaddingStyle("horizontal", "md")};
  ${applyMargins};
  ${applyPaddings}
`;

export const Poster = styled.div`
  width: 100%;
`;

export const About = styled.div`
  width: 100%;
`;
