import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
  propTypesTextTag,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Text } from "./h3.styles";

export const H3 = ({ tag = "h3", children, wrapperProps, ...props }) => {
  const StyledInner = () => <Text {...props}>{children}</Text>;

  return React.createElement(tag, wrapperProps, StyledInner());
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperProps: PropTypes.object,
  ...propTypesTextTag,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
