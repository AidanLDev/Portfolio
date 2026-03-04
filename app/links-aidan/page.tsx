import type { Metadata } from 'next'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { aidansSocialMedias } from '../../components/LinkPages/socialLinks'
import { generateMetadata as generateSEO } from '../../lib/helpers'

export const metadata: Metadata = generateSEO({
  title: 'Aidan Lowson | Links',
  description: "Aidan Lowson's social media links and profiles.",
  url: 'https://aidanlowson.com/links-aidan',
})

export default function AidansLinks() {
  return (
    <SocialMediaLinksContainer
      imgSrc='/images/BromoSoloRoundSmaller.webp'
      fullName='Aidan Lowson'
      socialLinks={aidansSocialMedias}
    />
  )
}
