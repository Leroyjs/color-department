import React from 'react';
import {Wrapper, Poster, About} from "./selected-works.style";
import {Avatar} from "../avatar";

export const SelectedWorks = () => {
    return (
        <Wrapper>
            <Poster>
                <Avatar/>
            </Poster>
            <About/>
        </Wrapper>
    );
};
