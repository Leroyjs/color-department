import styled from "@emotion/styled";
import {css} from "@emotion/css";
import {applyMargins, applyPaddings, colors, getCurrentColor, hexToRGBA} from "styles";
import {Caption, H2, H3} from "components";

export const CardTitle = styled(H2)`
  transition: color 0.5s;
`;
export const CardCaption = styled(Caption)`
  transition: color 0.5s;
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${hexToRGBA(colors.black, 0.6)};
  ${applyMargins};

  ${applyPaddings}
  &:hover {
    ${CardTitle}, ${CardCaption} {
      color: ${({theme}) => getCurrentColor("orange", theme)};
    }
  }
`;

export const CardTitleWrapper = css`
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 450px;
`;

export const WorksTitleWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorksTitle = styled(H3)`
  text-transform: uppercase;
`;

export const WorksWrapper = styled.div`
  width: 100%;
`;
