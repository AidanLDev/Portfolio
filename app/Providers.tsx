'use client'

import { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../lib/constants'

interface IProviders {
  children: ReactNode
}

export default function Providers({ children }: IProviders) {
  return (
    <>
      <GoogleAnalytics gaId="G-W0ZWY4VS2K" />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  )
}
