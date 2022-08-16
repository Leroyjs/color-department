import styled from "@emotion/styled";

export const SlideWrapper = styled.li`
  overflow: hidden;
  width: 0 !important;
  height: 100%;
  position: absolute;
  right: 0;
  transform: scale(1.04);
  transition: 0.7s transform cubic-bezier(0.25, 0.1, 0.25, 1), 0s width cubic-bezier(0.25, 0.1, 0.25, 1) 0.7s;
  cursor: grab;

  &.glide__slide--active {
    z-index: 1;
    width: 100% !important;
    height: 100% !important;
    transform: none;
    transition: .4s width ease-in;
  }
`;
