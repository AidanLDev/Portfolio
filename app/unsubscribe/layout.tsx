import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { generateMetadata as generateSEO } from '../../lib/helpers'

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Unsubscribe | Aidan Lowson',
    description: 'Unsubscribe from the mailing list.',
    url: 'https://aidanlowson.com/unsubscribe',
  }),
  robots: { index: false, follow: false },
}

export default function UnsubscribeLayout({ children }: { children: ReactNode }) {
  return children
}
