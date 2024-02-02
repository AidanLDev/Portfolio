/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, Center, Image } from '@chakra-ui/react'
import React from 'react'
import ImageLink from './ImageLink'
import useIsTablet from '../../hooks/useIsTablet'
import useIsMobile from '../../hooks/useIsMobile'

import styles from './style.module.scss'

export default function AboutMeCard() {
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
  return (
    <Box
      rounded="20px"
      background="#44444473"
      overflow="hidden"
      boxShadow="md"
      className={styles.cardContainer}
    >
      <Box backgroundImage={`/images/programmingBgS.webp`}>
        <Center>
          <Image
            alt="Cartoon avatar"
            src="/images/BromoSoloRoundSmaller.webp"
            h="200px"
            className={styles.cardImg}
          />
        </Center>
        <Center>
          <Heading className={styles.cardHeading}>Software Engineer</Heading>
        </Center>
      </Box>
      <Box p={5} className={styles.detailsBox} position="relative">
        <Text className={styles.cardText}>
          Full time Software Engineer, life long learner and programming
          enthusiast.{' '}
          {!isTablet && !isMobile && 'Hover for social media links.'}
        </Text>
        <Box className={styles.cardLinks} transition="all 1.5s ease-in-out">
          <ImageLink
            alt="GitHub"
            link="https://github.com/AidanLDev"
            imagePath="/images/Logos/github-512.webp"
          />
          <ImageLink
            alt="E-Mail me"
            link="mailto:dev@aidanlowson.com"
            imagePath="/images/Logos/round-blue-mail-icon.webp"
          />
          <ImageLink
            alt="LinkedIn"
            link="https://www.linkedin.com/in/aidanlowson1/"
            imagePath="/images/Logos/LinkedInLogoRound.webp"
          />
          <ImageLink
            alt="X"
            link="https://twitter.com/AidanL94"
            imagePath="/images/Logos/x_icon.webp"
          />
          <ImageLink
            alt="Instagram"
            link="https://www.instagram.com/lowsonaidan/"
            imagePath="/images/Logos/InstagramCircle.webp"
          />
          <ImageLink
            alt="Personal Blog"
            link="https://blog.aidanlowson.com"
            imagePath="/images/Logos/blog-icon.webp"
          />
        </Box>
      </Box>
    </Box>
  )
}
