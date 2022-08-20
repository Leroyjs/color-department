import React from 'react';
import {AwardsList} from "./awards-list";
import { AwardsContainer, AwardsTitle, AwardsSubTitle, } from "./awards-list.style";
import {PropTypes} from "prop-types";
import {AwardsItemProps} from "./types";

export const Awards = ({options, title, subtitle, ...props}) => {
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
        <AwardsList options={options} />
      </AwardsContainer>
    );
};

Awards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  options: PropTypes.arrayOf(AwardsItemProps),
};
