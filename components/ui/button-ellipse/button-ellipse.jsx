import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
  propTypesTextTag,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { button } from "./button-ellipse.style";

export const BUTTONELLIPSE = ({ tag = "button", children, wrapperProps, ...props }) => {
  const StyledInner = () => <Text {...props}>{children}</Text>;

  return React.createElement(tag, wrapperProps, StyledInner());
};

BUTTONELLIPSE.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperProps: PropTypes.object,
  ...propTypesTextTag,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
