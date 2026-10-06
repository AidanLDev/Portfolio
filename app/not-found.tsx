import type { Metadata } from 'next'
import BackHomeLink from '../components/BackHomeLink'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Aidan Lowson',
}

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <BackHomeLink />
    </>
  )
}
