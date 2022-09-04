import React, {useEffect, useRef} from 'react';
import {VideoBackground} from "components";
import {SlideWrapper} from "./slider-item.style";
import {propTypesVideoBg} from "../../types";
import {PropTypes} from "prop-types";

export const SliderItem = ({poster, video, isPlayed = false}) => {
    const videoRef = useRef();

    useEffect(() => {
        if (isPlayed) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isPlayed])

    return (
        <SlideWrapper className="glide__slide right">
            <VideoBackground
                poster={poster}
                video={video}
                ref={videoRef}
            />
        </SlideWrapper>
    );
};

SliderItem.propTypes = {
    ...propTypesVideoBg,
    isPlayed: PropTypes.bool
}
