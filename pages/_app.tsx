import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import '../styles/globals.scss'
import { theme } from '../lib/constants'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
