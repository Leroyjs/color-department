import React from "react";
import { PropTypes } from "prop-types";
import { AwardsItemProps } from "./types";
import { PopoverList } from "./popover-list";
import {
  AwardsContainer,
  AwardsTitle,
  AwardsSubTitle,
} from "./popover-list.style";

export const Popovers = ({ options, title, subtitle, isAboutImg, onClick, ...props }) => {
  return (
    <AwardsContainer {...props}>
      {title && (
        <AwardsTitle mb="md" color="white">
          {title}
        </AwardsTitle>
      )}
      {subtitle && (
        <AwardsSubTitle mb="md" ml="md" color="primary">
          {subtitle}
        </AwardsSubTitle>
      )}
      <PopoverList
        isAboutImg={isAboutImg}
        options={options}
        onClick={onClick}
      />
    </AwardsContainer>
  );
};

Popovers.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(AwardsItemProps),
};
