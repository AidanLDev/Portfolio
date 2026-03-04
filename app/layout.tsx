import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { generateMetadata } from '../lib/helpers'

import '../styles/globals.scss'
import Providers from './Providers'

interface IRootLayout {
  children: ReactNode
}

export const metadata: Metadata = generateMetadata({
  title: 'Aidan Lowson | Portfolio',
  description: 'Showcasing my personal projects, my links, skills and certifications.',
  url: 'https://aidanlowson.com',
  image: 'https://aidanlowson.com/images/Projects/Portfolio.webp',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aidan Lowson',
  url: 'https://aidanlowson.com',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://www.linkedin.com/in/aidanlowson1/',
    'https://github.com/AidanLDev',
    'https://www.instagram.com/lowsonaidan/',
    'https://www.twitter.com/AidanL94',
    'https://www.tiktok.com/@aidanlowson',
    'https://www.threads.net/@lowsonaidan',
    'https://leetcode.com/AidanLDev/',
    'https://www.youtube.com/channel/UCDJAFkcMY5Ze3SKQS-fhg0A',
  ],
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
      </head>
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
