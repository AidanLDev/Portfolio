import React, { useState, useEffect } from 'react'
import AnimatedLetter from './AnimatedLetter'

export default function Title() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const firstName: string[] = ['i', 'd', 'a', 'n', ' ']
  const lastName: string[] = ['o', 'w', 's', 'o', 'n']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <h1 className="headingContainer">
      <span className={`${letterClass} a`}>A</span>
      <AnimatedLetter letters={firstName} letterClass={letterClass} idx={10} />
      <span className={`${letterClass} _16 l`}>L</span>
      <AnimatedLetter letters={lastName} letterClass={letterClass} idx={17} />
    </h1>
  )
}
