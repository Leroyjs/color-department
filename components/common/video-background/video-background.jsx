import React, { forwardRef } from 'react'
import { propTypesVideoBg } from '../../types'
import { VideoContainer, VideoStyle } from './video.style'

// eslint-disable-next-line react/display-name
export const VideoBackground = forwardRef(
  ({ preview, video, autoPlay = false, ...props }, ref) => {
    return (
      <VideoContainer
        ref={ref}
        playsInline
        autoPlay={autoPlay}
        muted
        loop
        controls={false}
        poster={preview}
        {...props}
      >
        {video?.webm && <source src={video.webm} type="video/webm" />}
        <source
          src={typeof video === 'object' ? video?.mp4 || '' : video || ''}
          type="video/mp4"
        />
      </VideoContainer>
    )
  }
)

VideoBackground.propTypes = {
  ...propTypesVideoBg,
}

export function EmbedVideo({ promo_video }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          class="${VideoStyle}"
        >
         <source src="${promo_video}" type="video/mp4"/>
        </video>
      `,
      }}
    ></div>
  )
}
