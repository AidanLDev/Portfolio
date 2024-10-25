import React from 'react'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { aidansSocialMedias } from '../../components/LinkPages/socialLinks'

export default function AidansLinks() {
  return (
    <SocialMediaLinksContainer
      imgSrc="/images/BromoSoloRoundSmaller.webp"
      fullName="Aidan Lowson"
      socialLinks={aidansSocialMedias}
    />
  )
}
