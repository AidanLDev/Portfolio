import React from 'react'
import { Image, Tooltip } from '@chakra-ui/react'

export default function AWSCert() {
  return (
    <>
      <a href="https://www.credly.com/badges/aeaec428-0a39-4245-8bb6-67851fa02904/public_url" rel="noreferrer" target="_blank">
        <Tooltip label="Click to verify certificate">
          <Image src='/images/Certs/AWSCPBadge.png' alt="AWS Cloud Practitioner Badge" />
        </Tooltip>
      </a>
    </>
  )
}
