import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
  propTypesTextTag,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Text } from "./caption.styles";

export const Caption = ({ tag = "span", children, wrapperProps, ...props }) => {
  const StyledInner = () => <Text {...props}>{children}</Text>;

  return React.createElement(tag, wrapperProps, StyledInner());
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperProps: PropTypes.object,
  ...propTypesTextTag,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
