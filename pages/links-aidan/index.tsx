import React from 'react'
import { verifiedImg } from '../../lib/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'

import SocialMediaBox from '../../components/LinkPages/SocialMediaBox'
import styles from './style.module.scss'

interface SocialMediasObject {
  img: string
  tag?: string
  link: string
}

const baseLink = '/images/Logos/'

const socialMedias: SocialMediasObject[] = [
  {
    img: `${baseLink}InstagramCircle.webp`,
    tag: '@LowsonAidan',
    link: 'https://www.instagram.com/lowsonaidan/',
  },
  {
    img: `${baseLink}twitterRound.webp`,
    tag: '@AidanL94',
    link: 'https://twitter.com/AidanL94',
  },
  {
    img: `${baseLink}TikTokLogo.webp`,
    tag: 'aidanlowson',
    link: 'https://www.tiktok.com/@aidanlowson'
  },
  {
    img: `${baseLink}LinkedInLogoRound.webp`,
    tag: 'Aidan Lowson',
    link: 'https://www.linkedin.com/in/aidanlowson1/',
  },
  {
    img: `${baseLink}github-512.webp`,
    link: 'https://github.com/AidanLDev'
  },
  {
    img: `${baseLink}ThradsLogoSmall.webp`,
    tag: '@LowsonAidan',
    link: 'https://www.threads.net/@lowsonaidan',
  },
]

export default function ArniLinks() {
  return (
    <Box className={styles.linksWrapper}>
      <Head>
        <title>Aidans Socials</title>
      </Head>
      <Center className={styles.avatarImg}>
        <Image
          alt="Arni Rianis avatar/profile picture"
          src="/images/BromoSoloRoundSmaller.png"
          width={175}
          height={175}
        />
      </Center>
      <Flex justify="center" p="12px 0">
        <Text p="0 4px 0 0" fontSize="24px" fontWeight={600}>
          Aidan Lowson
        </Text>
        <img
          src={verifiedImg}
          alt="Verified profile"
          data-testid="verificationTick"
        />
      </Flex>
      <Flex gap="22px" justify="space-around" wrap="wrap">
        {socialMedias.map((social, idx) => (
          <SocialMediaBox
            backgroundImage={social.img}
            tag={social.tag}
            link={social.link}
            key={`${social.img}__${idx}`}
          />
        ))}
      </Flex>
    </Box>
  )
}
