/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, Center, Image } from '@chakra-ui/react'
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
      <Box p={5} h="200px" className="detailsBox" position="relative">
        <Text className="cardText">
          Full time DevOps technician, aspiring freelancer. Hover for links and stuff
        </Text>
        <Box className="cardLinks" transition="all 1.5s ease-in-out" pos="relative" top="-132px">
          <ImageLink
            alt="GitHub"
            link="https://github.com/AidanLDev"
            imagePath="/images/Logos/github-512.webp"
          />
          <ImageLink
            alt="E-Mail me"
            link="mailto:dev@aidanlowson.com"
            imagePath="/images/Logos/round-blue-mail-icon.png"
          />
          <ImageLink
            alt="LinkedIn"
            link="https://www.linkedin.com/in/aidanlowson1/"
            imagePath="/images/Logos/LinkedIn_icon_circle.svg.png"
          />
          <ImageLink
            alt="Twitter"
            link="https://twitter.com/AidanL94"
            imagePath="/images/Logos/twitter-circle-2.png"
          />
          <ImageLink
            alt="Instagram"
            link="https://www.instagram.com/lowsonaidan/"
            imagePath="/images/Logos/InstagramCircle.webp"
          />
          <ImageLink
            alt="Personal Blog"
            link="https://doubleateam.co.uk"
            imagePath="/images/Logos/blog-icon.png"
          />

        </Box>
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
