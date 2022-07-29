import {
  getCurrentColorStyles,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
} from "./get-styles-utils";

const getOffsetStylesByProps = (
  props,
  directionDictionary,
  getCurrentOffsetStyleHandler
) =>
  Object.keys(props).reduce((acc, key) => {
    const type = props[key];

    if (type) {
      const arrayOfOffsets = getCurrentOffsetStyleHandler(
        directionDictionary[key],
        props[key]
      );

      return [...arrayOfOffsets, ...acc];
    } else {
      return acc;
    }
  }, []);

export const applyColor = ({ color, theme }) =>
  getCurrentColorStyles(color, theme);

export const applyMargins = ({ mx, my, mt, mb, ml, mr, m }) => {
  const marginProps = { mx, my, mt, mb, ml, mr, m };

  const marginDirectionDictionary = {
    m: "default",
    mx: "horizontal",
    my: "vertical",
    mt: "top",
    mb: "bottom",
    ml: "left",
    mr: "right",
  };

  const marginStyles = getOffsetStylesByProps(
    marginProps,
    marginDirectionDictionary,
    getCurrentMarginStyle
  );

  return marginStyles;
};

export const applyPaddings = ({ px, py, pt, pb, pl, pr, p }) => {
  const paddingProps = { px, py, pt, pb, pl, pr, p };

  const paddingDirectionDictionary = {
    p: "default",
    px: "horizontal",
    py: "vertical",
    pt: "top",
    pb: "bottom",
    pl: "left",
    pr: "right",
  };

  const paddingStyles = getOffsetStylesByProps(
    paddingProps,
    paddingDirectionDictionary,
    getCurrentPaddingStyle
  );

  return paddingStyles;
};
