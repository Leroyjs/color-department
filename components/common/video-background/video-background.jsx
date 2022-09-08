import React, {forwardRef} from 'react';
import {propTypesVideoBg} from "../../types";
import {VideoContainer, VideoStyle} from "./video.style";

// eslint-disable-next-line react/display-name
export const VideoBackground = forwardRef(({poster, video, autoPlay = false, ...props}, ref) => {
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


export function EmbedVideo(props) {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          class="${VideoStyle}"
        >
         <source src="https://drive.google.com/uc?id=1c5tNBRmdudEUmxRWSIy7WpgAARacIRlP" type="video/mp4"/>
</video>
      `
        }}></div>
    )
}
