'use client'

import { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Provider as ChakraProvider } from '../components/ui/provider'

interface IProviders {
  children: ReactNode
}

export default function Providers({ children }: IProviders) {
  return (
    <>
      <GoogleAnalytics gaId="G-W0ZWY4VS2K" />
      <ChakraProvider>{children}</ChakraProvider>
    </>
  )
}
