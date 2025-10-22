'use client'

/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, Center } from '@chakra-ui/react'
import Image from 'next/image'
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
      <Box
        backgroundImage="url('/images/programmingBgS.webp')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Center>
          <Image
            alt="Cartoon avatar"
            src="/images/BromoSoloRoundSmaller.webp"
            width={200}
            height={200}
            priority
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
            alt="YouTube"
            link="https://www.youtube.com/@aidanl94"
            imagePath="/images/Logos/YTNoBackGround.webp"
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
            imagePath="/images/Logos/blogIcon.webp"
          />
        </Box>
      </Box>
    </Box>
  )
}
