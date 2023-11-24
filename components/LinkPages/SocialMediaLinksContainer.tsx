import React from 'react'
import { verifiedImg } from '../../lib/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import SocialMediaBox from '../../components/LinkPages/SocialMediaBox'
import { arnisSocialMedias as socialMedias } from '../../components/LinkPages/socialLinks'

import styles from './style.module.scss'

export interface ISocialMediaLinksContainerProps {
    title: string;
    imgSrc: string;
}

export const SocialMediaLinksContainer = ({ title, imgSrc }:ISocialMediaLinksContainerProps) => {
  return (
    <Box className={styles.linksWrapper}>
      <Head>
        <title>{title}</title>
      </Head>
      <Center className={styles.avatarImg}>
        <Image
          alt="Arni Rianis avatar/profile picture"
          src={imgSrc}
          width={175}
          height={175}
        />
      </Center>
      <Flex justify="center" p="12px 0">
        <Text p="0 4px 0 0" fontSize="24px" fontWeight={600}>
          Arni Riani
        </Text>
        <Image
          src={verifiedImg}
          alt="Verified profile"
          data-testid="verificationTick"
          width={16}
          height={36}
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
