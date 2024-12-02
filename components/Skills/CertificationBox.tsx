'use client'

import { Tooltip } from '../ui/tooltip'
import React from 'react'
import { motion } from 'framer-motion'
import { CertBoxProps } from '../../interfaces/skillsInterfaces'

import styles from './styles.module.scss'
import { MotionImageProps } from '../../lib/types'

const MotionImg = motion.img as React.FC<MotionImageProps>

export default function CertificationBox({ name, img, link }: CertBoxProps) {
  return (
    <div className={styles.certBox}>
      <a href={link} rel="noreferrer" target="_blank">
        <Tooltip content="Click to verify certificate">
          <MotionImg
            alt={name}
            src={`/images/Certs/${img}`}
            width={500}
            height={400}
            whileHover={{ scale: 1.01 }}
          />
        </Tooltip>
      </a>
    </div>
  )
}
