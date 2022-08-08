import React from 'react'

export default function AnimatedLetter({ letterClass, idx, letters }) {
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
