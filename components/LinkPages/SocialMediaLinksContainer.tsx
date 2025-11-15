import React from 'react'
import { verifiedImg } from '../../lib/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import SocialMediaBox from '../../components/LinkPages/SocialMediaBox'
import { SocialMediasObject } from '../../interfaces/socialLinksInterfaces'

import styles from './style.module.scss'

export interface ISocialMediaLinksContainerProps {
  imgSrc: string
  fullName: string
  socialLinks: SocialMediasObject[]
}

export const SocialMediaLinksContainer = ({
  imgSrc,
  fullName,
  socialLinks,
}: ISocialMediaLinksContainerProps) => {
  return (
    <Box className={styles.linksWrapper}>
      <Center className={styles.avatarImg}>
        <Image alt={`${fullName}'s avatar/profile picture`} src={imgSrc} width={175} height={175} />
      </Center>
      <Flex justify='center' p='12px 0'>
        <Text p='0 4px 0 0' fontSize='24px' fontWeight={600}>
          {fullName}
        </Text>
        <Image
          src={verifiedImg}
          alt='Verified profile'
          data-testid='verificationTick'
          width={16}
          height={36}
        />
      </Flex>
      <Flex gap='22px' justify='space-around' wrap='wrap'>
        {socialLinks.map((social, idx) => (
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
