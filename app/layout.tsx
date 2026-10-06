import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { experienceItems } from '@/components/ExperienceTimeline/ExperienceCards/experienceItems'
import { generateMetadata, SITE_NAME, SITE_URL } from '../lib/helpers'

import '../styles/globals.scss'
import Providers from './Providers'

interface IRootLayout {
  children: ReactNode
}

export const metadata: Metadata = generateMetadata({
  title: 'Aidan Lowson | Full-Stack Software Engineer',
  description:
    "Aidan Lowson, full-stack software engineer in the UK. Explore my experience, the skills I've learned, projects I've built, and get in touch to collaborate.",
  url: SITE_URL,
})

export const viewport: Viewport = {
  themeColor: '#000000',
}

const currentRole = experienceItems.find((item) => item.endDate === 'Present')

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-GB',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Aidan Lowson',
      url: SITE_URL,
      image: `${SITE_URL}/images/BromoSoloRoundSmallerCompressed.webp`,
      email: 'mailto:dev@aidanlowson.com',
      jobTitle: 'Full-Stack Software Engineer',
      ...(currentRole && {
        worksFor: {
          '@type': 'Organization',
          name: currentRole.companyName,
          url: currentRole.link,
        },
      }),
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Oxfordshire',
        addressCountry: 'GB',
      },
      knowsAbout: [
        'Software Engineering',
        'Web Development',
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'AWS',
        'DevOps',
      ],
      sameAs: [
        'https://www.linkedin.com/in/aidanlowson1/',
        'https://github.com/AidanLDev',
        'https://www.instagram.com/lowsonaidan/',
        'https://x.com/AidanL94',
        'https://www.tiktok.com/@aidanlowson',
        'https://www.threads.net/@lowsonaidan',
        'https://leetcode.com/AidanLDev/',
        'https://www.youtube.com/channel/UCDJAFkcMY5Ze3SKQS-fhg0A',
        'https://devdailyhub.com',
      ],
    },
  ],
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang='en-GB' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
      </head>
      <body>
        <script
          type='application/ld+json'
          // Escape '<' so the JSON can never close the script tag early
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
