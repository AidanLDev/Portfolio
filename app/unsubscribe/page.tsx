'use client'

import { useState } from 'react'
import Input from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button'
import styles from './styles.module.scss'
import { emailRegex } from '@/lib/validation'

function validateEmail(email: string) {
  const errors: { email?: string } = {}
  if (!email.trim()) errors.email = 'Email is required'
  else if (!emailRegex.test(email.trim())) errors.email = 'Invalid email'
  return errors
}

export default function Unsubscribe() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const errors = validateEmail(email)
  const hasErrors = Object.keys(errors).length > 0

  console.log('errors: ', errors)

  const handleUnSub = async () => {
    try {
      setSubmitting(true)
      const res = await fetch('/api/unsub', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        console.error('Failed to unsubscribe:', data.message || 'Unknown error')
        return
      }

      setTouched({})
      setEmail('')
      setSubmitted(true)
    } catch (err) {
      console.error('Failed to unsubscribe:', err)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.unsubscribeContainer}>
        <h1>Unsubscribed</h1>
        <p className='successMessage'>
          You have been successfully unsubscribed from our mailing list.
        </p>
      </div>
    )
  }

  return (
    <div className={styles.unsubscribeContainer}>
      <h1>Unsubscribe</h1>
      <p>Enter your email and press un-subscribe to be removed from the mailing list</p>
      <Input
        id='email-input'
        label='Email:'
        placeholder='Enter your email address'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setTouched((prev) => ({ ...prev, email: true }))
        }}
      />
      <Button
        disabled={submitting || (touched && hasErrors)}
        onClick={async () => await handleUnSub()}
      >
        Un-Subscribe
      </Button>
    </div>
  )
}
