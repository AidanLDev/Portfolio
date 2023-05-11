import React from 'react'
import { Center, Heading } from '@chakra-ui/react'
import styles from './styles.module.scss'

import AWSCert from './AWSCert'

export default function SkillsContainer() {
  return (
    <div className={styles.skillsContainer}>
      <Center>
        <Heading className={styles.title}>Skills</Heading>
      </Center>
      {/* Grid of all the things I know */}
      <Center>
        <Heading className={styles.title}>
          Certifications and achievements
        </Heading>
      </Center>
      {/* Grid of certs */}
      <AWSCert />
    </div>
  )
}
