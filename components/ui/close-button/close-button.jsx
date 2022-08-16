import React from 'react';
import {ButtonStyle} from "./close-button.style";

export const CloseButton = ({...props}) => {
    return (
        <ButtonStyle viewBox="0 0 40 40" {...props}>
            <circle cx="20" cy="20" r="20"/>
            <path className="cross" stroke="#101010" strokeWidth="2" d="m14 26 6-6m0 0 6-6m-6 6 6 6m-6-6-6-6"/>
        </ButtonStyle>
    );
};
