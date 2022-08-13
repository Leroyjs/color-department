import styled from "@emotion/styled";
import {applyMargins, applyPaddings, colors, getCurrentColor, hexToRGBA} from "styles";
import {Wolf} from "../wolf";

export const Wrapper = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  ${({isBorder}) => isBorder && `border: 1px solid ${hexToRGBA(colors.white, 0.2)}`};
  ${applyMargins};
  ${applyPaddings}
`;

export const PlaceholderImg = styled(Wolf)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 12px;

  .leftEye {
    fill: ${({theme}) => getCurrentColor("blue", theme)};
  }

  .rightEye {
    fill: ${({theme}) => getCurrentColor("yellow", theme)};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
