import React from 'react'
import { Center, Heading } from '@chakra-ui/react'
import styles from './styles.module.scss'

import Skills from './Skills'
import Certifications from './Certifications'

export default function SkillsContainer() {
  return (
    <div className={`${styles.skillsContainer} containerPadding`}>
      <Center>
        <Heading className={styles.title}>Skills</Heading>
      </Center>
      <Skills />
      <Center>
        <Heading className={styles.title}>Certifications</Heading>
      </Center>
      <Certifications />
    </div>
  )
}
