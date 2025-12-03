import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import Certifications from './Certifications'

import Skills from './Skills'
import styles from './styles.module.scss'

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
