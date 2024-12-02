import { createSystem, defaultConfig } from '@chakra-ui/react'

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        main: { value: '#F6F4F1' },
        primary: { value: '#FF0000' },
        secondary: { value: '#48AAF4' },
      },
    },
  },
})

export default theme
