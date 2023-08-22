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
    link: 'https://www.instagram.com/mynameisarni/',
  },
  {
    img: `${baseLink}twitterRound.webp`,
    link: 'https://twitter.com/MyNameIsArni',
  },
  {
    img: `${baseLink}ThradsLogoSmall.webp`,
    link: 'https://www.threads.net/@mynameisarni?igshid=MzRlODBiNWFlZA==',
  },
  {
    img: `${baseLink}LinkedInLogoRound.webp`,
    link: 'https://www.linkedin.com/in/arni-riani-012174162/',
  },
]

export default function ArniLinks() {
  return (
    <Box className={styles.linksWrapper}>
      <Head>
        <title>Arni's Socials</title>
      </Head>
      <Center className={styles.avatarImg}>
        <Image
          alt="Arni Rianis avatar/profile picture"
          src="/images/arni-avatar.webp"
          width={175}
          height={175}
        />
      </Center>
      <Flex justify="center" p="12px 0">
        <Text p="0 4px 0 0" fontSize="24px" fontWeight={600}>
          Arni Riani
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
