import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export interface SkillBoxProps {
  logo: string
  name: string
}

export default function SkillBox({ logo, name }: SkillBoxProps) {
  return (
    <div className={styles.skillsBox}>
      <Image
        as={motion.img}
        width={50}
        height={50}
        src={logo}
        alt={name}
        whileHover={{ scale: 1.1 }}
      />
      <Text>{name}</Text>
    </div>
  )
}
