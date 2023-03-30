import React from 'react'
import { Image, Tooltip } from '@chakra-ui/react'

export default function ImageLink({ link, imagePath, alt }) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <Tooltip label={alt} placement='auto-start'>
        <Image w="50px" alt={alt} src={imagePath} cursor="pointer" />
      </Tooltip>
    </a>
  )
}
