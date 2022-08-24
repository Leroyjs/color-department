import { breakpointsWidth, subsequenceOfBreakpoints } from "./constants";

import facepaint from "facepaint";

const getMedia = (condition) => (value) => `@media(${condition}: ${value})`;

const getMediaMaxWidth = getMedia("max-width");

const getMediaMaxWidthWithValueInPx = (value) => getMediaMaxWidth(value);

const mediaQuery = facepaint(
  subsequenceOfBreakpoints
    .map((breakpointName) =>
      getMediaMaxWidthWithValueInPx(breakpointsWidth[breakpointName])
    )
    .slice(1)
);

export const getResponsiveStyle = (styleName) => (values) =>
  mediaQuery({ [styleName]: values });
