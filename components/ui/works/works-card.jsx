import React, {useRef} from 'react';
import {VideoBackground} from "components";
import {CardCaption, CardFooter, CardTitle, CardTitleWrapper, CardWrapper} from "./works-card.style";

const DEMO_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const DEMO_POSTER = 'https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d?mw=1500&mh=844&q=70'

export const WorksCard = () => {
    const videoRef = useRef();

    return (
        <CardWrapper p="md" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <VideoBackground
                poster={DEMO_POSTER}
                video={{mp4: DEMO_VIDEO}}
                autoPlay={false}
                ref={videoRef}
            />
            <CardTitle color="white" wrapperProps={{className: CardTitleWrapper}}>
                El corte ingles
            </CardTitle>
            <CardFooter>
                <CardCaption color="white">Archangel Studios</CardCaption>
                <CardCaption color="white">2016</CardCaption>
            </CardFooter>
        </CardWrapper>
    );
};

function handleEnter(event) {
    const {target} = event;
    target.firstChild.play?.();
}

function handleLeave(event) {
    const {target} = event;
    target.firstChild.pause?.();
}

