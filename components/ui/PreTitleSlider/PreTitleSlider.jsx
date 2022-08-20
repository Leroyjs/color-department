import React from 'react';
import {Text, TextWrapper} from "./PreTitleSlider.style";

export const PreTitleSlider = ({children, ...props}) => {
    return (
        <Text color="white" {...props} wrapperProps={{className: TextWrapper}}>
            {children}
        </Text>
    );
};
