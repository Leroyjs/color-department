import React, {useEffect, useRef, useState} from 'react';
import Player from '@vimeo/player';
import {PlayButton, Wrapper} from "./video-player.style";

export const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlay, setPlay] = useState(false);

    useEffect(() => {
        const player = new Player('myVideo', {
            id: 385587409,
            byline: false,
            controls: true,
            dnt: true,
            keyboard: true,
            responsive: true,
            title: false,
        });
        player.on('play', () => {
            setPlay(true);
        });
        player.on('pause', () => {
            setPlay(false);
        });
        videoRef.current = player;
    }, [])

    function handlePlay() {
        videoRef.current.play();
    }

    return (
        <Wrapper isPlay={isPlay}>
            <div id="myVideo"/>
            <PlayButton onClick={handlePlay}>
                <svg viewBox="0 0 15 18" fill="none">
                    <path d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z" fill="white"/>
                </svg>
            </PlayButton>
        </Wrapper>
    );
};