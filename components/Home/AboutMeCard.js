/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, Center, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import ImageLink from './ImageLink'


export default function AboutMeCard() {
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
        <Text className="cardText">
          Full time DevOps technician, aspiring freelancer. Hover for links and stuff
        </Text>
        <VStack className="cardLinks" transition="all 1.5s ease-in-out">
          <ImageLink
            alt="GitHub Image"
            link="https://github.com/AidanLDev"
            imagePath="/images/Logos/GithubLogo.png"
          />
          {/* Double A Team */}
          {/* Email */}
          {/* LinkedIn */}

        </VStack>
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
