/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, Center, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import ImageLink from './ImageLink'

const IntroText = (
  <Text className="cardText">
    Full time DevOps technician, aspiring web freelancer. Hover for links and
    stuff
  </Text>
)

const LinksStack = (
  <VStack className="cardLinks" transition="all 1.5s ease-in-out">
    <ImageLink
      alt="GitHub Image"
      link="https://github.com/AidanLDev"
      imagePath="/images/Logos/GithubLogo.png"
    />
  </VStack>
)

export default function AboutMeCard() {
  // On hover with emotion: https://www.codedaily.io/tutorials/Create-a-Hoverable-Display-Card-with-React-and-Emotion

  return (
    <Box
      w="400px"
      rounded="20px"
      background="#44444473"
      overflow="hidden"
      boxShadow="md"
      className="cardContainer"
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
        {IntroText}
        {LinksStack}
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
