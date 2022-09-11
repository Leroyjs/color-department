import React, {forwardRef} from 'react';
import {propTypesVideoBg} from "../../types";
import {VideoContainer} from "./video.style";

// eslint-disable-next-line react/display-name
export const VideoBackground = forwardRef(({poster, video, autoPlay = false, playing = false, ...props}, ref) => {
    return (
        <VideoContainer ref={ref} url={typeof video === 'object' ? video.mp4 : video} poster={poster} {...props} playing={playing} muted loop/>
    );
});

VideoBackground.propTypes = {
    ...propTypesVideoBg
}
