import React from 'react';
import {PropTypes} from "prop-types";
import {H2} from "../h2";
import {Caption} from "../caption";
import {Wrapper} from "./detail-title.style";

export const DetailTitle = ({title, year, ...props}) => {
    return (
        <Wrapper {...props}>
            <H2 color="primary" mb="sm">
                {title}
            </H2>
            <Caption color="white">
                {year}
            </Caption>
        </Wrapper>
    );
};

DetailTitle.propsTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

