import React from 'react';
import {VideoContainer} from "./video.style";
import {PropTypes} from "prop-types";

const VideoBackground = ({poster, video, ...props}) => {
    return (
        <VideoContainer playsInline autoPlay muted loop poster={poster} {...props}>
            {video?.webm && <source src={video.webm} type="video/webm"/>}
            <source src={video.mp4} type="video/mp4"/>
        </VideoContainer>
    );
};

export default VideoBackground;

const SourceType = PropTypes.oneOfType([PropTypes.string, PropTypes.object]);

VideoBackground.propTypes = {
    poster: SourceType.isRequired,
    video: PropTypes.shape({
        webm: SourceType,
        mp4: SourceType.isRequired,
    }).isRequired,
}
