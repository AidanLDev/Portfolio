import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import React from 'react'

import styles from './styles.module.scss'

export default function SkillBox({ logo, name }) {
  return (
    <div className={styles.skillsBox}>
      <Image width={50} height={50} src={logo} alt={name} />
      <Text>{name}</Text>
    </div>
  )
}
