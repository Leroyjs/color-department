import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
  propTypesTextTag,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import {
  H3,
  ButtonEllipse,
} from "components";

export const Popup = ({ tag = "div", children, wrapperProps, ...props }) => {
  return React.createElement(tag, wrapperProps);
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperProps: PropTypes.object,
  ...propTypesTextTag,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
