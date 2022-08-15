import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import {
  Button,
  PlusLineHorizontal,
  PlusLineVertical,
} from "./button-shop.style";

export const ButtonShop = ({ children, ...props }) => (
  <Button {...props}>
    <PlusLineHorizontal />
    <PlusLineVertical />
  </Button>
);

ButtonShop.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,

  ...propTypesMargin,
  ...propTypesPadding,
};
