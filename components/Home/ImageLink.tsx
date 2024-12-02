import React from 'react'
import { Tooltip } from '../ui/tooltip'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ImageLinkProps } from '../../interfaces/homeInterfaces'

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
