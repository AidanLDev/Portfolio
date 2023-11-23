import React from 'react'
import { AnimatedLetterProps } from '../../interfaces/homeInterfaces'

export default function AnimatedLetter({
  letterClass,
  idx,
  letters,
}: AnimatedLetterProps) {
  return (
    <span>
      {letters.map((letter, i) => (
        <span key={`${letter}__${i}`} className={`${letterClass} _${i + idx}`}>
          {letter}
        </span>
      ))}
    </span>
  )
}
