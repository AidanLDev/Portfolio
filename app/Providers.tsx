'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { ReactNode } from 'react'
import { Provider as ChakraProvider } from '../components/ui/provider'

interface IProviders {
  children: ReactNode
}

export default function Providers({ children }: Readonly<IProviders>) {
  return (
    <>
      <GoogleAnalytics gaId='G-W0ZWY4VS2K' dataLayerName='dataLayer' />
      <ChakraProvider defaultTheme='dark'>{children}</ChakraProvider>
    </>
  )
}
