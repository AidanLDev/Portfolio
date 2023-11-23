import React from 'react'
import { Text, Flex, Center } from '@chakra-ui/react'

import styles from './style.module.scss'
import { SocialMediaBoxProps } from '../../interfaces/linkPageInterfaces'


export default function SocialMediaBox(props: SocialMediaBoxProps) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <Flex
        backgroundImage={props.backgroundImage}
        backgroundSize="contain"
        w={160}
        h={160}
        borderRadius="100px"
        cursor="pointer"
        className={styles.socialMediaBox}
      ></Flex>
      {props.tag && (
        <Center className={styles.socialMediaText}>
          <Text>{props.tag}</Text>
        </Center>
      )}
    </a>
  )
}
