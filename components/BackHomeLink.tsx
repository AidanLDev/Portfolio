import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export interface BackHomeLink {
  blog?: boolean
}

export default function BackHomeLink({ blog }: BackHomeLink) {
  return (
    <Link href={blog ? '/posts/' : '/'} passHref legacyBehavior>
      <Text color='secondary' m='20px 0'>
        <a>{blog ? '← All blogs' : '← Take me home'}</a>
      </Text>
    </Link>
  )
}
