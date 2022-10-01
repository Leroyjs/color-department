import React from 'react'
import { PropTypes } from 'prop-types'
import Image from 'next/image'
import { PictureWrapper } from './image-box.style'

const ImageBoxComponent = ({
  className,
  src,
  alt,
  layout = 'fill',
  ...props
}) => {
  return (
    <PictureWrapper className={className}>
      <Image layout={layout} alt={alt} {...props} src={src} {...props} />
    </PictureWrapper>
  )
}

export const ImageBox = React.memo(ImageBoxComponent)

ImageBox.propsTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  layout: PropTypes.oneOf(['fill', 'responsive']),
}
