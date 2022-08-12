import React from 'react';
import {GridWrapper, WorksTitle, WorksTitleWrapper, WorksWrapper} from "./works-card.style";
import {WorksCard} from "./works-card";

export const Works = () => {
    return (
        <WorksWrapper>
            <WorksTitle mb="md" wrapperProps={{className: WorksTitleWrapper}}>
                Miranda Bell’s cases
            </WorksTitle>
            <GridWrapper>
                <WorksCard/>
                <WorksCard/>
                <WorksCard/>
                <WorksCard/>
            </GridWrapper>
        </WorksWrapper>
    );
};
