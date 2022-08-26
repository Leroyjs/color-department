import {
  BlinkPictureWrapper,
  BlinkedPictureField,
  Cell,
  GridInner,
  GridWrapper,
  PhotoStartScreenWrapper,
  Picture,
  RunningLineStyle,
} from "./photo-start-screen.style";
import { Grid, RunningLine, Wolf } from "components";

import React from "react";

const arrayOfImages = [
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
];

export const PhotoStartScreen = () => {
  return (
    <PhotoStartScreenWrapper>
      <Grid arrayOfImages={arrayOfImages} withWolf />
      <RunningLine className={RunningLineStyle}></RunningLine>
    </PhotoStartScreenWrapper>
  );
};
