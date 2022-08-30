import { Grid, RunningLine, VideoBackground } from "components";
import {
    ContentWrapper, FlexLayerWrapper, RunningLineStyle, StartScreenWrapper
} from "./start-screen.style";

const DEMO_VIDEO_MP4 = "./BG_reel_temp.mp4";
const DEMO_VIDEO_WEBM = "./BG_reel_temp.webm";
const video = {
    mp4: DEMO_VIDEO_MP4,
    webm: DEMO_VIDEO_WEBM
};

export const StartScreen = () => {
    return (
        <StartScreenWrapper>
            <FlexLayerWrapper>
                <ContentWrapper>
                    <VideoBackground
                        video={video}
                        autoPlay={true}
                    />
                    <Grid/>
                    <RunningLine className={RunningLineStyle}/>
                </ContentWrapper>
            </FlexLayerWrapper>
        </StartScreenWrapper>
    );
};
