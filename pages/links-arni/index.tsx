import React from 'react'
import { verifiedImg } from '../../lib/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import SocialMediaBox from '../../components/LinkPages/SocialMediaBox'
import styles from './style.module.scss'

interface SocialMediasObject {
  img: string
  tag: string
  link: string
}

const socialMedias: SocialMediasObject[] = [
  {
    img: '/images/Logos/InstagramCircle.webp',
    tag: '@mynameisarni',
    link: 'https://www.instagram.com/mynameisarni/'
  },
]

export default function ArniLinks() {
  return (
    <Box p="64px 16px 32px">
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
      <Flex gap="22px" justify="space-around">
        {socialMedias.map((social, idx) => (
          <SocialMediaBox
            backgroundImage={social.img}
            tag={social.tag}
            key={`${social.img}__${idx}`}
          />
        ))}
      </Flex>
    </Box>
  )
}
