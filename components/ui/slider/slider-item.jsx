import React, { useEffect, useRef } from 'react'
import { VideoBackground } from 'components'
import { SlideWrapper } from './slider-item.style'
import { propTypesVideoBg } from '../../types'
import { PropTypes } from 'prop-types'

export const SliderItem = ({ preview, video, isPlayed = false, slideImg }) => {
  const videoRef = useRef()

  useEffect(() => {
    if (Boolean(slideImg)) return
    if (isPlayed) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isPlayed])

  return (
    <SlideWrapper className="glide__slide right">
      {slideImg ? (
        <img src={slideImg} alt={slideImg} />
      ) : (
        <VideoBackground preview={preview} video={video} ref={videoRef} />
      )}
    </SlideWrapper>
  )
}

SliderItem.propTypes = {
  ...propTypesVideoBg,
  isPlayed: PropTypes.bool,
}
