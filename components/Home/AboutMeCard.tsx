/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, Center, Image } from '@chakra-ui/react'
import React from 'react'
import ImageLink from './ImageLink'
import useIsTablet from '../../hooks/useIsTablet'
import useIsMobile from '../../hooks/useIsMobile'

export default function AboutMeCard() {
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
  return (
    <Box
      rounded="20px"
      background="#44444473"
      overflow="hidden"
      boxShadow="md"
      className="cardContainer"
    >
      <Box backgroundImage={`/images/programmingBgS.jpg`}>
        <Center>
          <Image
            alt="Cartoon avatar"
            src="/images/BromoSoloRoundSmaller.png"
            h="200px"
            className="cardImg"
          />
        </Center>
        <Center>
          <Heading className="cardHeading">Software Engineer</Heading>
        </Center>
      </Box>
      <Box p={5} className="detailsBox" position="relative">
        <Text className="cardText">
          Full time Software Engineer, life long learner and programming
          enthusiast.{' '}
          {!isTablet && !isMobile && 'Hover for social media links.'}
        </Text>
        <Box className="cardLinks" transition="all 1.5s ease-in-out">
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
            imagePath="/images/Logos/LinkedInLogoRound.webp"
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
            link="https://blog.aidanlowson.com"
            imagePath="/images/Logos/blog-icon.png"
          />
        </Box>
      </Box>
    </Box>
  )
}
