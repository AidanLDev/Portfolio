import type { Metadata } from 'next'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { aidansSocialMedias } from '../../components/LinkPages/socialLinks'
import { generateMetadata as generateSEO } from '../../lib/helpers'

export const metadata: Metadata = generateSEO({
  title: 'Aidan Lowson | Links & Profiles',
  description:
    "Quick links to Aidan Lowson's profiles on other sites: GitHub, LinkedIn, YouTube, LeetCode, his blogs, Instagram, X, TikTok and Threads.",
  image: '/images/og/links-aidan.png',
  imageAlt: "Aidan Lowson's links and profiles",
  url: 'https://aidanlowson.com/links-aidan',
})

export default function AidansLinks() {
  return (
    <SocialMediaLinksContainer
      imgSrc='/images/BromoSoloRoundSmallerCompressed.webp'
      fullName='Aidan Lowson'
      intro='Quick links to my profiles on other sites. Find my code on GitHub and LeetCode, my career on LinkedIn, videos on YouTube, my writing on Dev Daily Hub and the Double A Team blog, and everyday life on Instagram, TikTok, X and Threads.'
      socialLinks={aidansSocialMedias}
    />
  )
}
