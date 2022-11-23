import React from 'react'
import {
  PlayButton,
  PlayerCss,
  VideoPreview,
  Wrapper,
  WrapperPlayer,
} from './video-player.style'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const VideoPlayer = ({ videoId, preview }) => {
  return (
    <WrapperPlayer>
      <ReactPlayer
        className={PlayerCss}
        width="100%"
        height="100%"
        playing={!!preview}
        controls
        light={!!preview ? preview : false}
        playIcon={
          !!preview ? (
            <PlayButton onClick={() => {}}>
              <svg viewBox="0 0 15 18" fill="none">
                <path
                  d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z"
                  fill="white"
                />
              </svg>
            </PlayButton>
          ) : undefined
        }
        url={videoId}
      />
    </WrapperPlayer>
  )
}
