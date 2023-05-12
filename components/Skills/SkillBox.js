import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export default function SkillBox({ logo, name }) {
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
