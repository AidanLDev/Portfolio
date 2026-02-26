import Link from 'next/link'

export interface BackHomeLink {
  blog?: boolean
}

export default function BackHomeLink({ blog }: BackHomeLink) {
  return (
    <Link href={blog ? '/posts/' : '/'} passHref legacyBehavior>
      <p>
        <a>{blog ? '← All blogs' : '← Take me home'}</a>
      </p>
    </Link>
  )
}
