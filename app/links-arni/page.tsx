import type { Metadata } from 'next'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { arnisSocialMedias } from '../../components/LinkPages/socialLinks'
import { generateMetadata as generateSEO } from '../../lib/helpers'

export const metadata: Metadata = generateSEO({
  title: 'Arni Riani | Links',
  description: "All of Arni Riani's social media links and profiles in one place.",
  url: 'https://aidanlowson.com/links-arni',
})

export default function ArnisLinks() {
  return (
    <SocialMediaLinksContainer
      imgSrc='/images/arni-avatar.webp'
      fullName='Arni Riani'
      socialLinks={arnisSocialMedias}
    />
  )
}
