import React, {useEffect, useRef} from 'react';
import {VideoBackground} from "components";
import {SlideWrapper} from "./slider-item.style";
import {propTypesVideoBg} from "../../types";
import {PropTypes} from "prop-types";

export const SliderItem = ({poster, video, isPlayed = false}) => {
    return (
        <SlideWrapper className="glide__slide right">
            <VideoBackground
                poster={poster}
                video={video}
                playing={isPlayed}
            />
        </SlideWrapper>
    );
};

SliderItem.propTypes = {
    ...propTypesVideoBg,
    isPlayed: PropTypes.bool
}
