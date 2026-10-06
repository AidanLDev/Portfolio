import type { Metadata } from 'next'

export const SITE_URL = 'https://aidanlowson.com'
export const SITE_NAME = 'Aidan Lowson'
export const DEFAULT_OG_IMAGE = '/images/og/home.png'

interface GenerateMetadataProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
  url: string
}

export function generateMetadata({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Aidan Lowson, Full-Stack Software Engineer',
  url,
}: GenerateMetadataProps): Metadata {
  const imageObject = {
    url: image,
    width: 1200,
    height: 630,
    alt: imageAlt,
  }
  return {
    title,
    description,
    applicationName: SITE_NAME,
    authors: [{ name: 'Aidan Lowson', url: SITE_URL }],
    creator: 'Aidan Lowson',
    metadataBase: new URL(SITE_URL),
    keywords: [
      'Aidan Lowson',
      'Aidan Lowson Software Engineer',
      'Full-Stack Software Engineer',
      'Full Stack Developer UK',
      'Software Engineer Oxfordshire',
      'Next.js Developer',
      'React Developer',
      'TypeScript Developer',
      'AWS Developer',
      'Software Engineer Portfolio',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Aidan Lowson's Portfolio",
      images: [imageObject],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@AidanL94',
      images: [imageObject],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', type: 'image/x-icon' },
        { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      ],
      apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    },
  }
}
