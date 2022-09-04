import styled from "@emotion/styled";
import {applyMargins, applyPaddings, breakpointsWidth, colors, getVW, hexToRGBA} from "styles";

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${colors.white};
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  visibility: visible;
  transition: opacity 0.6s, visible 0.6s;

  svg {
    object-position: center;
    object-fit: cover;
    width: 12.5%;
    height: 12.5%;
  }
  
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: ${getVW(160)};
    height: ${getVW(160)};
    border-width: ${getVW(1)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 140px;
    height: 140px;
  };

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 80px;
    height: 80px;
  };
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${applyMargins};

  ${applyPaddings}
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${hexToRGBA(colors.black, 0.6)};
    transition: opacity 0.6s;
  }

  ${({isPlay}) => isPlay && `
    ${PlayButton} {
          visibility: hidden;
          opacity: 0;
    }
  
    &:after {
        opacity: 0;
        pointer-events: none;
    }
    `};

`;
