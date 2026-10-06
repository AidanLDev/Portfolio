import type { Metadata } from 'next'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { aidansSocialMedias } from '../../components/LinkPages/socialLinks'
import { generateMetadata as generateSEO } from '../../lib/helpers'

export const metadata: Metadata = generateSEO({
  title: 'Aidan Lowson | Links',
  description:
    "All of Aidan Lowson's social media links and profiles in one place: GitHub, LinkedIn, Instagram, X, TikTok and more.",
  url: 'https://aidanlowson.com/links-aidan',
})

export default function AidansLinks() {
  return (
    <SocialMediaLinksContainer
      imgSrc='/images/BromoSoloRoundSmallerCompressed.webp'
      fullName='Aidan Lowson'
      socialLinks={aidansSocialMedias}
    />
  )
}
