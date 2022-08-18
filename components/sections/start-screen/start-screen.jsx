import { Grid, RunningLine, VideoBackground } from "components";
import {
    GridUnvisibleZone,
    GridVisibleZone,
    GridWrapperVisibleZone,
    GridWrapperZone,
    ContentWrapper,
    RunningLineStyle,
    FlexLayerWrapper,
    StartScreenWrapper,

} from "./start-screen.style";
import { useEffect, useRef, useState } from "react";

import { FlexibleGrid } from "./flexible-grid";
import { resizeGridVisibleZone } from "./utils";

const DEMO_VIDEO_MP4 = "./BG_reel_temp.mp4";
const DEMO_VIDEO_WEBM = "./BG_reel_temp.webm";
const DEMO_VIDEO =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
//это убрать нужно. Тут фотка жопы
const poster = "https://i1.sndcdn.com/avatars-000343516318-241lzu-t240x240.jpg";
const video = {
    mp4: DEMO_VIDEO_WEBM,
};

export const StartScreen = () => {
    return (
        <>
            <StartScreenWrapper>
                <FlexLayerWrapper>
                    <ContentWrapper>
                        <VideoBackground
                            video={video}
                            poster={poster}
                            autoPlay={true}
                        ></VideoBackground>
                        <Grid></Grid>
                        <RunningLine className={RunningLineStyle}></RunningLine>
                    </ContentWrapper>
                </FlexLayerWrapper>
            </StartScreenWrapper>
        </>

    );
};
