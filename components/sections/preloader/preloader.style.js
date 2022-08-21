import {
  colors,
  getCurrentBackgroundColorStyles,
  getCurrentGridTemplateColumsStyle,
  getCurrentHeightSizeStyle,
  sizes,
} from "styles";

import { applyCurrentAnimation } from "./utils";
import { steps } from "./constants";
import styled from "@emotion/styled";
import {H3} from "../../ui/h3";
import {Grid} from "../../common";

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
  z-index: 999;
  transition: opacity 0.5s;
  ${({ isHidden }) => (isHidden ? "opacity: 0;" : "")}
`;

export const PreloaderHeader = styled.div`
  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Number = styled(H3)`
  height: 1.12em;
  overflow: hidden;
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
  grid-column: 1/9;
  position: relative;
`;

export const FoxBoxWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const FoxBoxInner = styled.div`
  display: grid;
  ${getCurrentGridTemplateColumsStyle()}
  grid-template-rows: repeat(3, ${sizes.desktopLG.x1});
  align-content: end;
  height: 100%;
`;

export const RunningLineWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  transform: translateY(-${sizes.desktopLG.x1});
  top: calc(100% - 0.625vw);
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
