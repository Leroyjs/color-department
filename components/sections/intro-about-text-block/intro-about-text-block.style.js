import {
  getCurrentColor,
  getCurrentBackgroundColorStyles,
  applyMargins,
  applyPaddings,
  breakpointsWidth, getCurrentColorStyles,
} from "styles";
import styled from "@emotion/styled";
import { TextDecorationUnderline, Planet } from "../../common";
import { H2 } from "../../ui/h2";

export const TextSectionWrapper = styled.div`
  display: block;
  text-align: center;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  width: 100%;
  ${applyMargins}
  ${applyPaddings}

  h2 {
    display: inline-block;
    margin: 0;
  }
`;

export const MapLink = styled.div`
  display: inline-block;
`;

export const RoundedNumber = styled.div`
  width: 58px;
  height: 58px;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)};
  border: 1px solid ${getCurrentColor("white")};
  margin: 0;
  position: relative;

  span {
    color: ${getCurrentColor("white")};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 52px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 24px;
    height: 24px;

    span {
      width: 100%;
      height: 100%;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      font-family: "Helvetica Neue", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 13px;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 3.625vw;
    height: 3.625vw;
  }
`;

export const TextDecorationWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg {
    stroke: ${({ theme }) => getCurrentColor("white", theme)};
    transition: stroke 0.3s;
  }

  span {
    ${({ theme }) => getCurrentColorStyles("white", theme)};
    transition: color 0.3s;
  }

  &:hover {
    svg {
      stroke: ${({ theme }) => getCurrentColor("primary", theme)};
      transition: stroke 0.3s;
    }

    span {
      ${({ theme }) => getCurrentColorStyles("primary", theme)};
      transition: color 0.3s;
    }
  }
`;

export const StyledWhiteH2 = styled(H2)`
  color: ${getCurrentColor("white")};
`;

export const StyledUnderline = styled(TextDecorationUnderline)`
  position: absolute;
  bottom: -16px;
  left: 50%;
  right: 0;
  transform: translateX(-50%);
  width: calc(100% + 6px);

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    bottom: -12px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 33.625vw;
    height: 1vw;
    bottom: -1vw;
  }
`;

export const StyledPlanet = styled(Planet)`
  width: 60px;
  height: 60px;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 52px;
    height: 52px;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 3.75vw;
    height: 3.75vw;
  }
`;

export const StyledDesktopBR = styled.br`
  display: block;
  
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const StyledDesktopSMBR = styled.br`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const StyledTabletBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: none;
  }
`;

export const StyledTabletSMBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: block;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const StyledTabletXSMBR = styled.br`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;

export const StyledPhoneLGBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: block;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const StyledPhoneSMBR = styled.br`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
