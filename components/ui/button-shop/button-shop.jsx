import {
  propTypesMargin,
  propTypesPadding,
} from "../../types";
import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-shop.style";
import { Plus } from "components";

export const ButtonShop = ({ children, ...props }) => (
  <Button {...props}>
    <Plus />
  </Button>
);

ButtonShop.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  ...propTypesMargin,
  ...propTypesPadding,
};
