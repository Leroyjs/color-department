import styled from "@emotion/styled";
import {applyMargins, applyPaddings, breakpointsWidth, getCurrentPaddingStyle, hexToRGBA, colors} from "styles";
import {Caption} from "../caption";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);

  ${applyMargins};
  ${applyPaddings};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    ${getCurrentPaddingStyle("horizontal", "md")};
    gap: 16px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  };
`;


export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    &:nth-child(1), &:nth-child(2) {
      align-items: flex-start;
    }

    &:nth-child(3), &:nth-child(4) {
      align-items: flex-end;
    }
  }
`;

export const CaptionStyled = styled(Caption)`

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    color: ${hexToRGBA(colors.white, 0.4)};
  };
`;

