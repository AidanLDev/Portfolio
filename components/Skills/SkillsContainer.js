import React from 'react'
import { Center, Heading } from '@chakra-ui/react'
import styles from './styles.module.scss'

import AWSCert from './AWSCert'
import Skills from './Skills'

export default function SkillsContainer() {
  return (
    <div className={styles.skillsContainer}>
      <Center>
        <Heading className={styles.title}>Skills</Heading>
      </Center>
      <Skills />
      <Center>
        <Heading className={styles.title}>
          Certifications and achievements
        </Heading>
      </Center>
      <AWSCert />
    </div>
  )
}
