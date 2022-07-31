import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-ellipse.style";
import { H3 } from "components";

export const ButtonEllipse = ({ children, ...props }) => (
  <Button {...props}>
    <H3 tag="span">{children}</H3>
  </Button>
);

ButtonEllipse.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypesColors,
  ...propTypesMargin,
  ...propTypesPadding,
};
