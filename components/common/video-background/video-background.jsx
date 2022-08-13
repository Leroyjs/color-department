import React, {forwardRef} from 'react';
import {PropTypes} from "prop-types";
import {VideoContainer} from "./video.style";
import {propTypesVideoBg, propTypesWorksCard} from "../../types";

// eslint-disable-next-line react/display-name
export const VideoBackground = forwardRef(({poster, video, autoPlay = true, ...props}, ref) => {
    return (
        <VideoContainer ref={ref} playsInline autoPlay={autoPlay} muted loop controls={false}
                        poster={poster} {...props}>
            {video?.webm && <source src={video.webm} type="video/webm"/>}
            <source src={video.mp4} type="video/mp4"/>
        </VideoContainer>
    );
});

VideoBackground.propTypes = {
    ...propTypesVideoBg
}
