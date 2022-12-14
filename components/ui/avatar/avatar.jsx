import React from 'react';
import {Img, PlaceholderImg, Wrapper} from "./avatar.style";

export const Avatar = ({img = null, ...props}) => {
    return (
        <Wrapper {...props} isBorder={!img}>
            {
                img ?
                    <Img src={img}/> :
                    <PlaceholderImg/>
            }
        </Wrapper>
    );
};
