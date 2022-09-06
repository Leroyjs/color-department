import React from 'react';
import {PropTypes} from "prop-types";
import {WorksCard} from "components";
import {propTypesWorksCard} from "../../types";
import {GridWrapper, WorksTitle, WorksTitleWrapper, WorksWrapper} from "./works-cards.style";

export const WorksCards = ({title, cards}) => {
    return (
        <WorksWrapper>
            {title && (
                <WorksTitle wrapperProps={{className: WorksTitleWrapper}}>
                    {title}
                </WorksTitle>
            )}
            <GridWrapper>
                {cards.map(card => (
                    <WorksCard firstTitle={card.title?.substring(0, 16)}
                               secondTitle={"see more"}
                               author={card.credentials.client}
                               year={card.year}
                               poster={card.preview}
                               video={card.shortVideo}
                               key={card.firstTitle}
                               href={"/detail/12"}/>
                ))}
            </GridWrapper>
        </WorksWrapper>
    );
};

WorksCards.propTypes = {
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(propTypesWorksCard)).isRequired
}
