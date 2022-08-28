import styled from "@emotion/styled";
import { Wolf } from "../wolf";
import {applyMargins, applyPaddings, breakpointsWidth, colors, getCurrentColor, getVW, hexToRGBA} from "styles";

export const Wrapper = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  
  ${({isBorder}) => isBorder && `border: 1px solid ${hexToRGBA(colors.white, 0.2)}`};
  ${applyMargins};
  ${applyPaddings};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(200)};
    height: ${getVW(200)};
    border-width: ${getVW(1)};;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}){
    width: 168px;
    height: 168px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}){
    width: 80px;
    height: 80px;
  }
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

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    padding: ${getVW(12)};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
