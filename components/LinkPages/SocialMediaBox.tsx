import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { SocialMediaBoxProps } from '../../interfaces/linkPageInterfaces'
import styles from './style.module.scss'

export default function SocialMediaBox(props: SocialMediaBoxProps) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <Flex
        backgroundImage={`url('${props.backgroundImage}')`}
        backgroundSize='contain'
        w={160}
        h={160}
        borderRadius='100px'
        cursor='pointer'
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
