/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Divider,
  Text,
  Heading,
  Center,
  VStack,
  Image,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageLink from './ImageLink'
import styled from '@emotion/styled'

const DisplayOver = styled(Box)({
  zIndex: 2,
  backgroundColor: 'transparent',
  transition: 'background-color 350ms ease',
  position: 'absolute',
})

export default function AboutMeCard() {
  const [isCardHovered, setCardHovered] = useState(false)

  // On hover with emotion: https://www.codedaily.io/tutorials/Create-a-Hoverable-Display-Card-with-React-and-Emotion

  return (
    <Box
      w="400px"
      rounded="20px"
      background="#44444473"
      overflow="hidden"
      boxShadow="md"
      className="cardContainer"
      onMouseOver={() => setCardHovered(true)}
      onMouseOut={() => setCardHovered(false)}
    >
      <Box backgroundImage={`/images/spaceBgS.jpg`}>
        <Center>
          <Image
            alt="Cartoon avatar"
            src="/images/digitalAvatar.png"
            h="200px"
          />
        </Center>
        <Center>
          <Heading className="cardHeading">DevOps Engineer</Heading>
        </Center>
      </Box>
      <Box p={5} h="255px" className="detailsBox" position="relative">
        {isCardHovered ? (
          <DisplayOver>
            <VStack>
              <ImageLink
                alt="GitHub Image"
                link="https://github.com/AidanLDev"
                imagePath="/images/Logos/GithubLogo.png"
              />
            </VStack>
          </DisplayOver>
        ) : (
          <Box>
            <Text>
              Hey there, I'm Aidan, a Frontend developer from the UK who loves
              creating websites.
            </Text>
            <Text>
              Hobbies wise I play the guitar, enjoy both learning and
              experiencing new things such as a language, both programming and
              human ones, traveling around and keeping active.
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}
{
  /* OnHover Links to GH, email and linkedIn */
}
{
  /* <VStack>
          <ImageLink
            alt="GitHub Image"
            link="https://github.com/AidanLDev"
            imagePath="/images/Logos/GithubLogo.png"
          />
        </VStack> */
}
