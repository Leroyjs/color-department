import React from 'react';
import {PropTypes} from "prop-types";
import AwardsItem from "./awards-item";
import {ListStyled} from "./awards-list.style";

export const AwardsList = ({options}) => {

    return (
        <ListStyled>
            {options.map((option, index) => (
                <AwardsItem key={index} {...option}/>
            ))}
        </ListStyled>
    );
};

const AwardsItemProps = PropTypes.shape({});

AwardsList.propTypes = {
    options: PropTypes.arrayOf(AwardsItemProps),
}
