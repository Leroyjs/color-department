import React, { useEffect, useRef } from 'react'
import { propTypesVideoBg } from '../../types'
import { VideoBackground } from 'components'
import { PropTypes } from 'prop-types'
import {
  CardCaption,
  CardFooter,
  CardTitle,
  CardTitleWrapper,
  CardWrapper,
} from './works-card.style'

export const WorksCard = ({
  preview,
  video,
  href = '/',
  firstTitle,
  secondTitle = '',
  author,
  year,
}) => {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.load?.()
  }, [video])

  return (
    <CardWrapper
      href={href}
      p="md"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <VideoBackground preview={preview} video={video} ref={videoRef} />
      <CardTitle wrapperProps={{ className: CardTitleWrapper }}>
        <div className="inner-card-title">
          <span dangerouslySetInnerHTML={{ __html: firstTitle }}></span>
          <span> {secondTitle || firstTitle}</span>
        </div>
      </CardTitle>
      <CardFooter>
        <CardCaption color="white">{author}</CardCaption>
        <CardCaption color="white">{year}</CardCaption>
      </CardFooter>
    </CardWrapper>
  )
}

function handleEnter(event) {
  const { target } = event
  target.firstChild.play?.()
}

function handleLeave(event) {
  const { target } = event
  target.firstChild.pause?.()
  target.firstChild.load?.()
}

WorksCard.propTypes = {
  ...propTypesVideoBg,
  href: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}
