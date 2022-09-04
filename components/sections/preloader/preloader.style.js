import {
  colors,
  getCurrentBackgroundColorStyles,
  getCurrentGridTemplateColumsStyle,
  getCurrentHeightSizeStyle,
  sizes,
  breakpointsWidth,
  hexToRGBA,
} from "styles";

import { applyCurrentAnimation } from "./utils";
import { steps } from "./constants";
import styled from "@emotion/styled";
import { H3 } from "../../ui/h3";
import { Grid } from "../../common";
import { css } from "@emotion/css";

export const PreloaderWrapper = styled.div`
  ${getCurrentGridTemplateColumsStyle()}
  display: grid;
  grid-template-rows: ${sizes.desktopLG.half} 1fr;
  background-color: ${colors.black};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  height: calc(var(--fsvh, 1vh) * 100);
  z-index: 99999;
  transition: opacity 0.5s;

  ${({ isHidden }) => (isHidden ? `opacity:0; pointer-events: none;` : "")}
`;

export const PreloaderHeader = styled.div`
  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${sizes["desktopLG"].half};
  border-bottom: 1px solid ${hexToRGBA(colors.white, 0.2)};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: ${sizes["tabletLG"].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: ${sizes["tabletLG"].x1};
  }
`;

export const Number = styled(H3)`
  height: 1.12em;
  overflow: hidden;
  transition: 2s opacity 0.5s;
  opacity: ${({isActive}) => isActive ? 1 : 0};
`;

export const FoxImg = css`
  width: 100%;
  height: 100%;
`;

export const NumberInner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(${({ step }) => (step ? step : 1) * -1.12}em);
  transition: transform 0.3s;
`;

export const HeaderLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)}
  transform: scaleX(${({ stepIndex }) => steps[stepIndex] / 100});
  transform-origin: left;
  transition: transform 1s;
`;

export const GridStyled = styled(Grid)`
  position: absolute;
`;

export const GridWrapper = styled.div`
  width: 100vw;
  grid-column: 1/9;
  position: absolute;
  height: 100%;
  bottom: 0;
  padding-top: ${sizes["desktopLG"].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: ${sizes["tabletLG"].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: ${sizes["tabletLG"].x1};
  }
`;

export const FoxBoxWrapper = styled.div`
  overflow: hidden;
  height: calc(100% - ${sizes["desktopLG"].half});
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  margin-top: ${sizes["desktopLG"].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: calc(100% - ${sizes["tabletLG"].thirdX2});
    margin-top: ${sizes["tabletLG"].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: calc(100% - ${sizes["desktopLG"].half});
    height: calc(var(--fsvh, 1vh) * 100 - ${sizes["desktopLG"].half});
    margin-top: ${sizes["desktopLG"].half};
  }
`;

export const FoxBoxInner = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  grid-template-rows: repeat(3, ${sizes.desktopLG.x1});
  align-content: end;
  height: 100%;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-rows: repeat(3, ${sizes.tabletLG.x1});
  }
`;

export const RunningLineWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  transform: translateY(-${sizes.desktopLG.x2});
  top: calc(100vh + ${sizes.desktopLG.x1});
  top: calc(var(--fsvh, 1vh) * 100 + ${sizes.desktopLG.x1});
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    transform: translateY(-${sizes.tabletLG.x2});
    top: calc(100vh + ${sizes.tabletLG.x1});
    top: calc(var(--fsvh, 1vh) * 100 + ${sizes.tabletLG.x1});
  }
  ${({ stepIndex }) =>
    stepIndex ? getCurrentHeightSizeStyle("x1") : "height: 0px;"}
  overflow: hidden;
  transition: height 0.5s;
`;

export const ImageWrapper = styled.div`
  transition: transform 0.5s,
    opacity ${({ opasityTransition }) => opasityTransition};
  transition-timing-function: cubic-bezier(0.58, 1.75, 0.15, 0.81);
  grid-area: ${({ gridArea }) => gridArea + "/" + gridArea};
  opacity: ${({ step, isHidden }) => (isHidden ? 0 : step)};
  ${applyCurrentAnimation}
`;
