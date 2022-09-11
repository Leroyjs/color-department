import styled from "@emotion/styled";
import {css} from "@emotion/css";
import {getCurrentColor} from "styles";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {ssr: false});

export const VideoContainer = styled(ReactPlayer)`
  display: block;
  object-fit: cover;
  position: absolute;
  pointer-events: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: -1;
  background-color: ${({theme}) => getCurrentColor("black", theme)};
  border: none;
  background-size: cover;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoStyle = css`
  display: block;
  object-fit: cover;
  position: absolute;
  pointer-events: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${({theme}) => getCurrentColor("black", theme)};
  border: none;

  source {
    background-size: cover;
  }
`;
