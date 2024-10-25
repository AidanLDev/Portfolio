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
  return {
    title,
    description,
    metadataBase: new URL('https://aidanlowson.com'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Aidan Lowson's Portfolio",
      images: image ? [{ url: image }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
    other: {
      'google-site-verification': 'your-verification-code', // If needed
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}
