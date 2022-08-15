import { StartScreenWrapper, RunningLineStyle, GridWrapperZone,
    GridUnvisibleZone, GridVisibleZone, GridWrapperVisibleZone } from './start-screen.style';
import { RunningLine, Grid, VideoBackground } from 'components';
import { useRef, useEffect, useState } from 'react';
import { resizeGridVisibleZone } from './utils'
const DEMO_VIDEO_MP4 = './BG_reel_temp.mp4';
const DEMO_VIDEO_WEBM = './BG_reel_temp.webm';
const DEMO_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const poster = './poster-start-screen';
const video = {
    mp4: DEMO_VIDEO_WEBM,
};

export const StartScreen = () => {
    const gridZoneRef = useRef();
    const [gridHeight, setGridHeight] = useState();
    useEffect(() => {
        resizeGridVisibleZone(setGridHeight, gridZoneRef, window);
    }, []);
    return (
        <StartScreenWrapper>
            <VideoBackground video={video} poster={poster} autoPlay={true}></VideoBackground>
            <GridWrapperZone ref={gridZoneRef}>
                <GridVisibleZone>
                    <Grid></Grid>
                </GridVisibleZone>
            </GridWrapperZone>
            <RunningLine className={RunningLineStyle}></RunningLine>
        </StartScreenWrapper>
    )
}