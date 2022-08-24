import React from 'react';
import {Text, TextWrapper} from "./pre-title-slider.style";

export const PreTitleSlider = ({children, ...props}) => {
    return (
        <Text color="white" {...props} wrapperProps={{className: TextWrapper}}>
            {children}
        </Text>
    );
};
