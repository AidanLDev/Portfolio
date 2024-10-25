import React, { ReactNode } from 'react'

import type { Metadata } from 'next'
import { generateMetadata } from '../lib/helpers'

import '../styles/globals.scss'
import Providers from './Providers'

interface IRootLayout {
  children: ReactNode
}

export const metadata: Metadata = generateMetadata({
  title: 'Aidan Lowson | Portfolio',
  description:
    'Showcasing my personal projects and anything else I feel should be shared with the world.',
  url: 'https://aidanlowson.com',
  image: 'https://aidanlowson.com/images/Projects/Portfolio.webp',
})

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
