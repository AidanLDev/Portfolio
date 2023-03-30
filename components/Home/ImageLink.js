import React from 'react'
import { Image } from '@chakra-ui/react'

export default function ImageLink({ link, imagePath, alt }) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <Image alt={alt} src={imagePath} cursor="pointer" />
    </a>
  )
}
