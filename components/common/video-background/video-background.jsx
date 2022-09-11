import React, {forwardRef} from 'react';
import {propTypesVideoBg} from "../../types";
import {VideoContainer, VideoStyle} from "./video.style";

// eslint-disable-next-line react/display-name
export const VideoBackground = forwardRef(({poster, video, autoPlay = false, playing = false, ...props}, ref) => {
    return (
        <VideoContainer ref={ref} url={typeof video === 'object' ? video.mp4 : video} poster={poster} {...props} playing={playing} muted loop/>
    );
});

VideoBackground.propTypes = {
    ...propTypesVideoBg
}
export function EmbedVideo(props) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          class="${VideoStyle}"
        >
         <source src="https://github.com/Kaigarodov/image-data/blob/master/video/BG_video_lite.mp4?raw=true" type="video/mp4"/>
        </video>
      `,
            }}
        ></div>
    );
}
