import React from 'react';
import {VideoBackground} from "components";
import {SlideWrapper} from "./slider-item.style";
import {propTypesVideoBg} from "../../types";

export const SliderItem = ({poster, video}) => {
    return (
        <SlideWrapper className="glide__slide">
            <VideoBackground
                poster={poster}
                video={video}
            />
        </SlideWrapper>
    );
};

SliderItem.propTypes = {
    ...propTypesVideoBg
}
