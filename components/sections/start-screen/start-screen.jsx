import { useEffect, useState } from "react";
import { Grid, RunningLine, VideoBackground } from "components";
import {
    ContentWrapper, FlexLayerWrapper, RunningLineStyle, StartScreenWrapper
} from "./start-screen.style";
import { useVH } from "utils";

const DEMO_VIDEO_MP4 =
  "https://drive.google.com/uc?id=1c5tNBRmdudEUmxRWSIy7WpgAARacIRlP";
const DEMO_VIDEO_WEBM =
  "https://drive.google.com/uc?id=1c5tNBRmdudEUmxRWSIy7WpgAARacIRlP";
const video = {
    mp4: DEMO_VIDEO_MP4,
    webm: DEMO_VIDEO_WEBM
};

export const StartScreen = () => {
    useEffect(()=>{
        const video = document.querySelector('#fuck-safari');
        video.muted = true;

        video.onloadeddata = ()=>{
            setTimeout(()=>{
                video.play()
            })
            console.log('loaded1')
        }
        video.onloadedmetadata = ()=>{
            video.play()
        }

        setTimeout(()=>{
            video.play()
        }, 5000)

        video.play();
    },[])
    useVH();

    return (
        <StartScreenWrapper>
                <ContentWrapper>
                    <VideoBackground
                        video={video}
                        autoPlay={true}
                        playsinline
                        muted
                    />
                </ContentWrapper>
        </StartScreenWrapper>
    );
};
