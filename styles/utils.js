import { breakpointsWidth, namesOfBreakpoints } from "./constants";

export const hexToRGBA = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
};

export const getSizeInVw = (resolution) => (size) => `${size / resolution}vw`;

export const getRubberSizeAtDesktopXLG = getSizeInVw(
  breakpointsWidth[namesOfBreakpoints.desktopXLG]
);

export const getArrayOfIndex = (countOfItems) => {
  let array = [];

for (let i = 0; i < countOfItems; i++) {
    array.push(i);
  }

  return array;
};

export const stubFunction = () => {};
