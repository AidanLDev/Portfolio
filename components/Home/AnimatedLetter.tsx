import React from 'react'

export interface AnimatedLetterProps {
  letterClass: string
  idx: number
  letters: string[]
}

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
