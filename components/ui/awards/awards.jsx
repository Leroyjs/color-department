import React from 'react';
import {AwardsList} from "./awards-list";
import {AwardsContainer, AwardsTitle} from "./awards-list.style";
import {PropTypes} from "prop-types";
import {AwardsItemProps} from "./types";

export const Awards = ({options, title, ...props}) => {
    return (
        <AwardsContainer {...props}>
            <AwardsTitle mb="md">
                {title}
            </AwardsTitle>
            <AwardsList options={options}/>
        </AwardsContainer>
    );
};

Awards.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(AwardsItemProps),
}
