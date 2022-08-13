import React from 'react';
import {WorksCard} from "../../../ui/works-card";
import {GridWrapper, WorksTitle, WorksTitleWrapper, WorksWrapper} from "./works-cards.style";

export const WorksCards = () => {
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
