'use client'

import { useState } from 'react'
import { emailRegex } from '@/lib/validation'
import Input from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button'
import styles from './styles.module.scss'

function validate(name: string, email: string, message: string) {
  const errors: { name?: string; email?: string; message?: string } = {}
  if (!name.trim()) errors.name = 'Name is required'
  else if (name.trim().length > 100) errors.name = 'Name is too long'

  if (!email.trim()) errors.email = 'Email is required'
  else if (!emailRegex.test(email.trim())) errors.email = 'Invalid email'

  if (!message.trim()) errors.message = 'Message is required'
  else if (message.trim().length > 5000) errors.message = 'Message is too long'

  return errors
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const errors = validate(name, email, message)
  const hasErrors = Object.keys(errors).length > 0

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (hasErrors) return

    setSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        setSubmitError(data.message || 'Failed to send message')
        return
      }

      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setTouched({})
    } catch {
      setSubmitError('Failed to send message, please try again')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.contactForm}>
        <p className='successMessage'>Message sent! I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div>
        <Input
          label='Name'
          id='contact-name'
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
        />
        {touched.name && errors.name && <p className={styles.fieldError}>{errors.name}</p>}
      </div>
      <div>
        <Input
          label='Email'
          id='contact-email'
          type='email'
          placeholder='your.email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {touched.email && errors.email && <p className={styles.fieldError}>{errors.email}</p>}
      </div>
      <div>
        <div className={styles.textareaWrapper}>
          <label htmlFor='contact-message'>Message</label>
          <textarea
            id='contact-message'
            placeholder='Your message...'
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur('message')}
          />
        </div>
        {touched.message && errors.message && <p className={styles.fieldError}>{errors.message}</p>}
      </div>
      {submitError && <p className={styles.fieldError}>{submitError}</p>}
      <Button type='submit' disabled={submitting || (touched && hasErrors)}>
        <span className={styles.buttonContent}>{submitting ? 'Sending...' : '✈ Send Message'}</span>
      </Button>
    </form>
  )
}
