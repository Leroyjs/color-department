import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-rectangle.style";
import { H3 } from "components";

export const ButtonRectangle = ({ children, ...props }) => (
  <Button {...props}>
    <H3 tag="span">{children}</H3>
  </Button>
);

ButtonRectangle.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,

  ...propTypesMargin,
  ...propTypesPadding,
};
