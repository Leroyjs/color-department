import { Grid, RunningLine, VideoBackground } from "components";
import {
    ContentWrapper, FlexLayerWrapper, RunningLineStyle, StartScreenWrapper
} from "./start-screen.style";

const DEMO_VIDEO_MP4 = "./BG_reel_temp.mp4";
const DEMO_VIDEO_WEBM = "./BG_reel_temp.webm";
//TODO: это убрать нужно. Тут фотка жопы (теперь котика)
const poster = "https://happypik.ru/wp-content/uploads/2019/09/njashnye-kotiki5.jpg";
const video = {
    mp4: DEMO_VIDEO_MP4,
    webm: DEMO_VIDEO_WEBM
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
