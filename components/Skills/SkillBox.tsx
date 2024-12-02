'use client'

import { Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { SkillBoxProps } from '../../interfaces/skillsInterfaces'

import styles from './styles.module.scss'
import { MotionImageProps } from '../../lib/types'

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
      <Text>{name}</Text>
    </div>
  )
}
