'use client'

import React, { useEffect, useState } from 'react'
import AnimatedLetter from './AnimatedLetter'

export default function Title() {
  const [letterClass, setLetterClass] = useState('text-animate-hover')
  const [isAnimating, setIsAnimating] = useState(false)
  const firstName: string[] = ['i', 'd', 'a', 'n', ' ']
  const lastName: string[] = ['o', 'w', 's', 'o', 'n']

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true)
      setLetterClass('text-animate')
    }

    const finishAnimation = () => {
      setLetterClass('text-animate-hover')
      setIsAnimating(false)
    }

    const rafId = requestAnimationFrame(() => {
      const startTimer = setTimeout(startAnimation, 50)
      const endTimer = setTimeout(finishAnimation, 4050)

      return () => {
        clearTimeout(startTimer)
        clearTimeout(endTimer)
      }
    })

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <h1 className='headingContainer'>
      <span
        className={`${isAnimating ? letterClass : 'text-animate-hover'} a`}
        data-testid='first-name-title'
      >
        A
      </span>
      <AnimatedLetter
        letters={firstName}
        letterClass={isAnimating ? letterClass : 'text-animate-hover'}
        idx={10}
      />
      <span
        className={`${isAnimating ? letterClass : 'text-animate-hover'} _16 l`}
        data-testid='last-name-title'
      >
        L
      </span>
      <AnimatedLetter
        letters={lastName}
        letterClass={isAnimating ? letterClass : 'text-animate-hover'}
        idx={17}
      />
    </h1>
  )
}
