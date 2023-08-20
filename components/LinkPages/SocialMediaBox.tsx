import React from 'react'
import { Box, Text, Flex, Center } from '@chakra-ui/react'

import styles from './style.module.scss'

interface SocialMediaBoxProps {
  backgroundImage: string
  tag: string
  link: string
}

export default function SocialMediaBox(props: SocialMediaBoxProps) {
  return (
    <a href="https://www.instagram.com/mynameisarni/" target="_blank">
      <Flex
        backgroundImage={props.backgroundImage}
        backgroundSize="contain"
        w={175}
        h={175}
        borderRadius="100px"
        cursor="pointer"
        className={styles.socialMediaBox}
      >
        <Center>
          <Text>{props.tag}</Text>
        </Center>
      </Flex>
    </a>
  )
}
