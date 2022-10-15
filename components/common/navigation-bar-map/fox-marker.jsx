import React from 'react'
import { FoxStyleMap, FoxWrapperMap } from '../../sections/footer/footer.style'
import { Text } from '../../ui/text'
import { FoxLogo } from '../fox-logo'

export const FoxMarker = ({ title, href, ...props }) => {
  return (
    <FoxWrapperMap href={href} {...props}>
      <Text color="white">{title}</Text>
      <FoxLogo className={FoxStyleMap} />
    </FoxWrapperMap>
  )
}
