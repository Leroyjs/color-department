import React, { forwardRef } from 'react'
import { propTypesVideoBg } from '../../types'
import { VideoContainer } from './video.style'

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
        preview={preview}
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
