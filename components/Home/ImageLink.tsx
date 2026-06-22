import { motion } from 'motion/react'
import type { FC } from 'react'
import type { ImageLinkProps } from '@/interfaces/homeInterfaces.types'
import type { MotionImageProps } from '@/lib/types'
import styles from './style.module.scss'

const MotionImg = motion.img as FC<MotionImageProps>

export default function ImageLink({ link, imagePath, alt }: Readonly<ImageLinkProps>) {
  return (
    <a href={link} rel='noreferrer' target='_blank' className={styles.imageLink}>
      <span className={styles.imageTooltip} role='tooltip'>
        {alt}
      </span>
      <MotionImg alt={alt} src={imagePath} whileHover={{ scale: 1.1 }} />
    </a>
  )
}
