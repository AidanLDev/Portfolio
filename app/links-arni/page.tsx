import type { Metadata } from 'next'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { arnisSocialMedias } from '../../components/LinkPages/socialLinks'
import { generateMetadata as generateSEO } from '../../lib/helpers'

export const metadata: Metadata = generateSEO({
  title: 'Arni Riani | Links & Profiles',
  description:
    "Quick links to Arni Riani's profiles on other sites, plus her own website at arniriani.com. Follow her on Instagram, TikTok, X and Threads, or connect on LinkedIn.",
  image: '/images/og/links-arni.png',
  imageAlt: "Arni Riani's links and profiles",
  url: 'https://aidanlowson.com/links-arni',
})

export default function ArnisLinks() {
  return (
    <SocialMediaLinksContainer
      imgSrc='/images/arni-avatar.webp'
      fullName='Arni Riani'
      intro='Quick links to my profiles on other sites. Visit my own website at arniriani.com, follow along on Instagram, TikTok, X and Threads, or connect with me on LinkedIn.'
      socialLinks={arnisSocialMedias}
    />
  )
}
