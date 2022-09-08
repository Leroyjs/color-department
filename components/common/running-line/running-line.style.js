import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentColor,
  getCurrentMarginStyle,
  sizes,
} from "styles";

import { breakpointsWidth } from "styles";
import { getVW } from "styles";
import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";

const scrollAnimation = keyframes`
    from { transform: translateX(0) translateZ(0);}
    to { transform: translateX(-50%) translateZ(0); }
`;

const ScrollContentDinamicStyle = ({ outline }) => {
  if (outline) {
    return `
            & h1 span {
                color: ${colors.black};
                text-shadow: 
                    -1.5px -1.5px 0 ${colors.white}, 
                    1.5px -1.5px 0 ${colors.white}, 
                    -1.5px 1.5px 0 ${colors.white}, 
                    1.5px 1.5px 0 ${colors.white};
                transition: color 0.3s, text-shadow 0.3s;
            }
        `;
  }
};

export const RunningLineScrollContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  ${ScrollContentDinamicStyle};
`;

const SeparatorDinamicStyle = ({ outline }) => {
  if (outline) {
    return `
            & span { 
                color: ${colors.white};
                transition: color 0.3s;
            }
            border-color: ${colors.white};
            transition: border-color 0.3s;
        `;
  }
};

export const RunningLineSeparator = styled.div`
  border: 1px solid;
  border-radius: 50%;
  border-color: ${({ theme }) => getCurrentColor("primary", theme)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: ${getVW(100)};
    min-width: ${getVW(240)};
  }
  @media screen and (max-width: ${breakpointsWidth.desktopLG}) {
    height: ${sizes["desktopLG"].half};
    min-height: 100px;
    min-width: 240px;
  }
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: ${sizes["tabletLG"].half};
    min-width: 200px;
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    min-height: 65px;
  }
  ${getCurrentMarginStyle("horizontal", "sm")}
  ${SeparatorDinamicStyle};
`;
export const RunningLineWrapper = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  margin-left: -50%;
  align-items: center;
  height: 13vw;
  transform: translateX(50%) translateZ(0);

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 24.5vw;
  }

  ${({ link }) => (link ? "cursor: pointer" : "")};
  & > *:nth-of-type(1) {
    animation: ${scrollAnimation} 30s linear infinite;

    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
      animation: ${scrollAnimation} 50s linear infinite;
    }
  }

  :hover {
    h1 span {
      color: ${({ theme }) => getCurrentColor("primary", theme)};
      text-shadow: -1.5px -1.5px 0 ${({ theme }) => getCurrentColor("primary", theme)},
        1.5px -1.5px 0 ${({ theme }) => getCurrentColor("primary", theme)},
        -1.5px 1.5px 0 ${({ theme }) => getCurrentColor("primary", theme)},
        1.5px 1.5px 0 ${({ theme }) => getCurrentColor("primary", theme)};
    }

    ${RunningLineSeparator} {
      border-color: ${({ theme }) => getCurrentColor("primary", theme)};
      & span {
        color: ${({ theme }) => getCurrentColor("primary", theme)};
      }
    }
  }
  ${applyMargins};
  ${applyPaddings}
`;
