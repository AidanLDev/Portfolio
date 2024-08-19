import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './styles.module.scss'

export default function Unsubscribe() {
  const [email, setEmail] = useState('')
  console.log('email:', email)
  const handleUnSub = async () => {
    // TODO: Try api/unsubscribe or /unsubscribe
    await fetch('/api/unsub', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
  }
  return (
    <div className={styles.unsubscribeContainer}>
      <Heading >Unsubscribe</Heading>
      <p>
        Enter your email and press un-subscribe to be removed from the mailing
        list
      </p>
      <Box>
        <Text>Email:</Text>
        <Input
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Button colorScheme="blue" onClick={async () => await handleUnSub()}>
        Un-Subscribe
      </Button>
    </div>
  )
}
