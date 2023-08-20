import React from 'react'
import { verifiedImg } from '../../lib/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import SocialMediaBox from '../../components/LinkPages/SocialMediaBox'

export default function ArniLinks() {
  return (
    <Box p="64px 16px 32px">
      <Center>
        <Image
          alt="Arni Rianis avatar/profile picture"
          src="/images/arni-avatar.webp"
          width={125}
          height={125}
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
        <SocialMediaBox />
      </Flex>
    </Box>
  )
}
