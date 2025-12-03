import { motion } from 'framer-motion'
import React from 'react'
import { ImageLinkProps } from '../../interfaces/homeInterfaces'
import { MotionImageProps } from '../../lib/types'
import { Tooltip } from '../ui/tooltip'

const MotionImg = motion.img as React.FC<MotionImageProps>

export default function ImageLink({ link, imagePath, alt }: Readonly<ImageLinkProps>) {
  return (
    <a href={link} rel='noreferrer' target='_blank'>
      <Tooltip content={alt} positioning={{ placement: 'top-start' }}>
        <MotionImg alt={alt} src={imagePath} whileHover={{ scale: 1.1 }} />
      </Tooltip>
    </a>
  )
}
