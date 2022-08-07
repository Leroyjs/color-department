import React, {forwardRef} from 'react';
import {PropTypes} from "prop-types";
import {VideoContainer} from "./video.style";

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

const SrcArgType = PropTypes.oneOfType([PropTypes.string, PropTypes.object]);

VideoBackground.propTypes = {
    poster: SrcArgType.isRequired,
    autoPlay: PropTypes.bool,
    video: PropTypes.shape({
        webm: SrcArgType,
        mp4: SrcArgType.isRequired,
    }).isRequired,
}
