import {
  fox11,
  fox12,
  fox13,
  fox14,
  fox21,
  fox22,
  fox23,
  fox24,
  fox33,
} from "assets/icons";

import { namesOfBreakpoints } from "styles";

const {
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = namesOfBreakpoints;

const getArrayOfTranslationTransformations = (arrayOfPositions = []) =>
  arrayOfPositions.map((position) => `translate(${position});`);

export const preloaderAnimations = {
  [desktopLG]: {
    "1/1": getArrayOfTranslationTransformations([
      "0, -100%",
      "0, -100%",
      "200%, -100%",
      "100%, 0",
      "0, 0",
      "0, 0",
    ]),
    "1/2": getArrayOfTranslationTransformations([
      "200%, 200%",
      "200%, 200%",
      "200%, 0",
      "0, -100%",
      "0, 0",
      "0, 0",
    ]),
    "1/3": getArrayOfTranslationTransformations([
      "0, 0",
      "0, 0",
      "0, 100%",
      "0, 100%",
      "0, 0",
      "0, 0",
    ]),
    "1/4": getArrayOfTranslationTransformations([
      "200%, 0",
      "200%, 0",
      "200%, 0",
      "0, 0",
      "0, 0",
      "0, 0",
    ]),
    "2/1": getArrayOfTranslationTransformations([
      "400%, -200%",
      "400%, -200%",
      "400%, 0",
      "0, 0",
      "0, 0",
      "0, 0",
    ]),
    "2/2": getArrayOfTranslationTransformations([
      "200%, 0",
      "200%, 0",
      "500%, 100%",
      "300%, 100%",
      "200%, -200%",
      "0, 0",
    ]),
    "2/3": getArrayOfTranslationTransformations([
      "0, -200%",
      "0, -200%",
      "-100%, 0",
      "0, 100%",
      "200%, 0",
      "0, 0",
    ]),
    "2/4": getArrayOfTranslationTransformations([
      "300%, 0",
      "300%, 0",
      "300%, -100%",
      "100%, 0",
      "0, 0",
      "0, 0",
    ]),
    "3/3": getArrayOfTranslationTransformations([
      "400%, -300%",
      "400%, -300%",
      "500%, -100%",
      "300%, -200%",
      "0, 0",
      "0, 0",
    ]),
  },
};

export const foxPieces = [
  {
    img: fox11,
    opasityTransition: "0.3s 0.3s",
    gridArea: "1/1",
  },
  {
    img: fox12,
    opasityTransition: "0.3s 0.1s",
    gridArea: "1/2",
  },
  {
    img: fox13,
    opasityTransition: "0.3s 0.4s",
    gridArea: "1/3",
  },
  {
    img: fox14,
    opasityTransition: "0.3s 0.2s",
    gridArea: "1/4",
  },
  {
    img: fox21,
    opasityTransition: "0.3s 0s",
    gridArea: "2/1",
  },
  {
    img: fox22,
    opasityTransition: "0.3s 0.4s",
    gridArea: "2/2",
  },
  {
    img: fox23,
    opasityTransition: "0.3s 0.2s",
    gridArea: "2/3",
  },
  {
    img: fox24,
    opasityTransition: "0.3s 0.5s",
    gridArea: "2/4",
  },
  {
    img: fox33,
    opasityTransition: "0.3s 0.3s",
    gridArea: "3/3",
  },
];

export const steps = [0, "00", "34", "56", "93", "100"];
