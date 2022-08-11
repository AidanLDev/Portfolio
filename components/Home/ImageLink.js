import React from 'react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function ImageLink({ link, imagePath, alt }) {
  return (
    <Link href={link} passHref target="_blank">
      <Image alt={alt} src={imagePath} cursor="pointer" />
    </Link>
  )
}
