import { useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [mediaQuery] = useMediaQuery(['(max-width: 575px)'], {
    fallback: [false],
  })

  useEffect(() => {
    setIsMobile(mediaQuery)
  }, [mediaQuery])

  return isMobile
}
