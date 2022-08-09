import React from 'react';
import {AwardsList} from "./awards-list";
import {AwardsContainer, AwardsTitle} from "./awards-list.style";

export const Awards = ({options, title}) => {
    return (
        <AwardsContainer>
            <AwardsTitle mb="md">
                {title}
            </AwardsTitle>
            <AwardsList options={options}/>
        </AwardsContainer>
    );
};
