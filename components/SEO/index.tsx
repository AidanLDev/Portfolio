import Head from 'next/head'
import React from 'react'
import { MetaTags, SEOProps } from '../../interfaces/seoInterfaces.types'

const socialTags = (
  url: string,
  title: string,
  description: string,
  image: string,
  createdAt?: string,
  updatedAt?: string,
): MetaTags[] => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:site',
      content: description,
    },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image:src', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: url },
    { name: 'og:image', content: image },
    { name: 'og:description', content: description },
    {
      name: 'og:site_name',
      content: "Aidan Lowson's Portfolio",
    },
    // Only include published/modified times when explicitly provided to avoid
    // generating a different timestamp on server vs client render which can
    // cause hydration mismatches in development.
    ...(createdAt
      ? [
          {
            name: 'og:published_time',
            content: createdAt,
          },
        ]
      : []),
    ...(updatedAt
      ? [
          {
            name: 'og:modified_time',
            content: updatedAt,
          },
        ]
      : []),
  ]

  return metaTags
}

const SEO = ({ title, description, image, url }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='canonical' href={url} />
      <meta name='description' content={description} />
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      {image && <meta itemProp='image' content={image} />}
      {socialTags(url, title, description, image ?? '').map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />
      })}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@content': 'http://schema.org',
            '@type': 'Article',
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
    </Head>
  )
}

export default SEO
