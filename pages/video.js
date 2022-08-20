import {useRef} from "react";
import "styles/global.style";
import {VideoBackground} from "components";

/**
 *
 *  Для управления видео использовать доступ через ref.
 *  Но, если ховер или ещё какое-то событие происходит прямо над элементом video, то
 *  можно получить доступ и через target, как в примере ниже...
 *
 *  HTML5 Video Events and API:
 *  https://www.w3.org/2010/05/video/mediaevents.html
 *
 */

const DEMO_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const DEMO_POSTER = 'https://www.meme-arsenal.com/memes/71fcdc62722bd4ae986ecec1694d2535.jpg'
const VideoPage = ({video, poster}) => {
    const videoRef = useRef();

    function handleEnter(event) {
      const { target } = event;
      if (target.currentTime > 0.001) target.play();
    }

    function handleLeave(event) {
      const { target } = event;
      target.pause();
    }

    function handlePlay() {
        const videoEl = videoRef.current;
        if (!videoEl) return;
        videoEl.play()
    }

    return (
      <VideoBackground
        poster={DEMO_POSTER}
        video={{ mp4: DEMO_VIDEO }}
        autoPlay={false}
        ref={videoRef}
        onClick={handlePlay}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
    );
};

export default VideoPage;
