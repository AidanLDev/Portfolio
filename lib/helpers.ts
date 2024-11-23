import { Metadata } from 'next'

interface GenerateMetadataProps {
  title: string
  description: string
  image?: string
  url: string
}

export function generateMetadata({
  title,
  description,
  image,
  url,
}: GenerateMetadataProps): Metadata {
  const imageObject = {
    url: image as string,
    width: 895,
    height: 420,
    alt: "Aidan Lowson's Portfolio Cover Image",
  }
  return {
    title,
    description,
    applicationName: 'Aidan Lowsons Portfolio',
    metadataBase: new URL('https://aidanlowson.com'),
    keywords: [
      'Aidan Lowson',
      "Aidan Lowson's Portfolio",
      'Software Engineers Portfolio',
      'Aidan Lowsons personal projects',
      'Technical Portfolio',
      'Techincal Projects',
      'Full Stack Developers Portfolio',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Aidan Lowson's Portfolio",
      images: image ? [imageObject] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [imageObject] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: 'index, follow',
    },
    icons: {
      icon: {
        url: 'https://aidanlowson.com/favicon.ico',
        type: 'image/x-icon',
      },
    },
  }
}
