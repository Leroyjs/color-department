import styled from "@emotion/styled";
import {getCurrentColor} from "styles";

export const VideoContainer = styled.video`
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
