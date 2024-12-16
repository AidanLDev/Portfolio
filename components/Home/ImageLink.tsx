import React from 'react'
import { Tooltip } from '../ui/tooltip'
import { motion } from 'framer-motion'
import { MotionImageProps } from '../../lib/types'
import { ImageLinkProps } from '../../interfaces/homeInterfaces'

const MotionImg = motion.img as React.FC<MotionImageProps>

export default function ImageLink({ link, imagePath, alt }: ImageLinkProps) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <Tooltip content={alt} positioning={{ placement: 'top-start' }}>
        <MotionImg alt={alt} src={imagePath} whileHover={{ scale: 1.1 }} />
      </Tooltip>
    </a>
  )
}
