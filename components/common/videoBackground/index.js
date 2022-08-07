import React, {forwardRef} from 'react';
import {VideoContainer} from "./video.style";
import {PropTypes} from "prop-types";

// eslint-disable-next-line react/display-name
const VideoBackground = forwardRef(({poster, video, autoPlay = true, ...props}, ref) => {
    return (
        <VideoContainer ref={ref} playsInline autoPlay={autoPlay} muted loop controls={false}
                        poster={poster} {...props}>
            {video?.webm && <source src={video.webm} type="video/webm"/>}
            <source src={video.mp4} type="video/mp4"/>
        </VideoContainer>
    );
});

export default VideoBackground;

const SourceType = PropTypes.oneOfType([PropTypes.string, PropTypes.object]);

VideoBackground.propTypes = {
    poster: SourceType.isRequired,
    autoPlay: PropTypes.bool,
    video: PropTypes.shape({
        webm: SourceType,
        mp4: SourceType.isRequired,
    }).isRequired,
}
