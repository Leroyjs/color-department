import React from 'react'
import { PropTypes } from 'prop-types'
import Image from 'next/image'
import { PictureWrapper } from './image-box.style'

export const ImageBox = ({
  className,
  src,
  alt,
  layout = 'fill',
  ...props
}) => {
  return (
    <PictureWrapper className={className}>
      <Image layout={layout} alt={alt} {...props} src={src} />
    </PictureWrapper>
  )
}

ImageBox.propsTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  layout: PropTypes.oneOf(['fill', 'responsive']),
}
