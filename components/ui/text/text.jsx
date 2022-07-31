import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
  propTypesTextTag,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { TextInner } from "./text.styles";

export const Text = ({ tag = "span", children, wrapperProps, ...props }) => {
  const StyledInner = () => <TextInner {...props}>{children}</TextInner>;

  return React.createElement(tag, wrapperProps, StyledInner());
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperProps: PropTypes.object,
  ...propTypesTextTag,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
