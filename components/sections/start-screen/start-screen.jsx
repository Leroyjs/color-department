import { Grid, RunningLine, VideoBackground } from "components";
import { useVH } from "utils";
import {
    ContentWrapper, FlexLayerWrapper, RunningLineStyle, StartScreenWrapper
} from "./start-screen.style";

const DEMO_VIDEO_MP4 =
  "https://drive.google.com/uc?id=1c5tNBRmdudEUmxRWSIy7WpgAARacIRlP";

export const StartScreen = () => {
    useVH();

    return (
        <StartScreenWrapper>
            <FlexLayerWrapper>
                <ContentWrapper>
                    <VideoBackground video={DEMO_VIDEO_MP4} playing/>
                    <Grid />
                    <RunningLine className={RunningLineStyle} />
                </ContentWrapper>
            </FlexLayerWrapper>
        </StartScreenWrapper>
    );
};
