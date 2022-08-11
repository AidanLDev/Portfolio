/* eslint-disable react/no-unescaped-entities */
import { Box, Divider, Text, Heading, Center } from '@chakra-ui/react'
import React from 'react'

export default function AboutMeCard() {
  return (
    <Box w="400px" rounded="20px" overflow="hidden" boxShadow="md">
      <Box p={5} backgroundImage={`/images/spaceBgS.jpg`} h="450px">
        <Center>
          <Heading className="cardHeading">About Me</Heading>
        </Center>
        <Divider marginBottom="24px" />
        {/* TODO: Make text more readable */}
        <Text>
          I'm a Frontend developer from the UK who loves creating websites.
          Hobbies wise I play the guitar, enjoy both learning and experiencing
          new things such as a language, both programming and human ones,
          traveling around and keeping active.
        </Text>
        {/* Links to GH, email and linkedIn */}
      </Box>
    </Box>
  )
}
