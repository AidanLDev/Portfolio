import React from 'react'
import { Image, Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export interface ImageLinkProps {
  link: string
  imagePath: string
  alt: string
}

export default function ImageLink({ link, imagePath, alt }: ImageLinkProps) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <Tooltip label={alt} placement="auto-start">
        <Image
          as={motion.img}
          w="50px"
          alt={alt}
          src={imagePath}
          cursor="pointer"
          whileHover={{ scale: 1.1 }}
        />
      </Tooltip>
    </a>
  )
}
