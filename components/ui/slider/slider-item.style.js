import styled from "@emotion/styled";
import {breakpointsWidth, getVW} from "styles";

export const SlideWrapper = styled.li`
  overflow: hidden;
  width: 0 !important;
  height: 100%;
  position: absolute;
  transform: scale(1.04);
  transition: 0.7s transform cubic-bezier(0.25, 0.1, 0.25, 1),
    0s width cubic-bezier(0.25, 0.1, 0.25, 1) 0.7s;
  cursor: grab;

  &.right {
    left: auto;
    right: 0;
  }

  &.left {
    left: 0;
    right: auto;
  }

  &.glide__slide--active {
    z-index: 1;
    width: 100% !important;
    height: 100% !important;
    transform: none;
    transition: 0.4s width ease-in;
  }
`;

export const Prev = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const Next = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const Cursor = styled.div`
  position: fixed;
  opacity: 0;
  width: 1px;
  height: 1px;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: opacity 0.3s;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}){
    width: ${getVW(1)};
    height: ${getVW(1)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: none;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;
