/* eslint-disable react/no-unescaped-entities */
import { Box, Image, Text, Heading, Center } from '@chakra-ui/react'
import React from 'react'

export default function AboutMeCard() {
  return (
    <Box w="400px" rounded="20px" overflow="hidden" boxShadow="md">
      {/* Nice bg image */}
      <Box p={5}>
        <Center>
          <Heading className="heading">About Me</Heading>
        </Center>
        <Text>
          I'm a Frontend developer from the UK who loves creating websites.
          Hobbies wise I play the guitar, enjoy learning new things such as a
          language and keeping fit and active by running.
        </Text>
      </Box>
    </Box>
  )
}
