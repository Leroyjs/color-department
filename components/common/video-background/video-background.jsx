import React, { forwardRef } from 'react';
import { propTypesVideoBg } from "../../types";
import { VideoContainer } from "./video.style";

// eslint-disable-next-line react/display-name
export const VideoBackground = forwardRef(({poster, video, autoPlay = false, ...props}, ref) => {
    return (
        <VideoContainer ref={ref} playsInline autoPlay={autoPlay} loop controls={false}
                        poster={poster} {...props} muted>
            {video?.webm && <source src={video.webm} type="video/webm"/>}
            <source src={video.mp4} type="video/mp4"/>
        </VideoContainer>
    );
});

VideoBackground.propTypes = {
    ...propTypesVideoBg
}
