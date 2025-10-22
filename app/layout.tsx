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
    'Showcasing my personal projects, my links, skills and certifications.',
  url: 'https://aidanlowson.com',
  image: 'https://aidanlowson.com/images/Projects/Portfolio.webp',
})

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
  <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
