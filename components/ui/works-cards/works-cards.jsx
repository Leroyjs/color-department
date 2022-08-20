import React from 'react';
import {PropTypes} from "prop-types";
import {WorksCard} from "components";
import {propTypesWorksCard} from "../../types";
import {GridWrapper, WorksTitle, WorksTitleWrapper, WorksWrapper} from "./works-cards.style";

export const WorksCards = ({title, cards}) => {
    return (
        <WorksWrapper>
            {title && (
                <WorksTitle mb="md" wrapperProps={{className: WorksTitleWrapper}}>
                    {title}
                </WorksTitle>
            )}
            <GridWrapper>
                {cards.map(card => (
                    <WorksCard firstTitle={card.firstTitle}
                               secondTitle={card.secondTitle}
                               author={card.author}
                               year={card.year}
                               poster={card.poster}
                               video={card.video}
                               key={card.firstTitle}
                    />
                ))}
            </GridWrapper>
        </WorksWrapper>
    );
};

WorksCards.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape(propTypesWorksCard))
}
