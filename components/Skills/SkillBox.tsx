'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { SkillBoxProps } from '../../interfaces/skillsInterfaces'
import { MotionImageProps } from '../../lib/types'
import styles from './styles.module.scss'

const MotionImg = motion.img as React.FC<MotionImageProps>

export default function SkillBox({ logo, name }: SkillBoxProps) {
  return (
    <div className={styles.skillsBox}>
      <MotionImg
        width={50}
        height={50}
        src={logo}
        alt={name}
        style={{
          backgroundColor: name === 'Next' ? 'white' : undefined,
        }}
        whileHover={{ scale: 1.1 }}
      />
      <p>{name}</p>
    </div>
  )
}
