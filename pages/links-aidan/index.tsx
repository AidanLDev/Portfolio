import React from 'react'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { aidansSocialMedias } from '../../components/LinkPages/socialLinks'

export default function ArnisLinks() {
  return (
    <SocialMediaLinksContainer
      title="Aidans Socials"
      imgSrc="/images/BromoSoloRoundSmaller.webp"
      fullName="Aidan Lowson"
      socialLinks={aidansSocialMedias}
    />
  )
}
