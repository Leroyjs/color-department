import React from 'react';
import {PropTypes} from "prop-types";
import {Caption} from "../caption";
import {H3} from "../h3";
import {Item, Wrapper} from "./stakeholders.style";

export const Stakeholders = ({client, colourist, director, dop, ...props}) => {
    return (
        <Wrapper {...props}>
            <Item>
                <Caption color="white" mb="xxsm">
                    Client
                </Caption>
                <H3 color="white">
                    {client}
                </H3>
            </Item>

            <Item>
                <Caption color="white" mb="xxsm">
                    Colourist
                </Caption>
                <H3 color="white">
                    {colourist}
                </H3>
            </Item>

            <Item>
                <Caption color="white" mb="xxsm">
                    Director
                </Caption>
                <H3 color="white">
                    {director}
                </H3>
            </Item>

            <Item>
                <Caption color="white" mb="xxsm">
                    Dop
                </Caption>
                <H3 color="white">
                    {dop}
                </H3>
            </Item>
        </Wrapper>
    );
};

Stakeholders.propTypes = {
    client: PropTypes.string.isRequired,
    colourist: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    dop: PropTypes.string.isRequired
}
