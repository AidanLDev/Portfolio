import { render, screen } from '@testing-library/react'
import AnimatedLetter from '../../../components/Home/AnimatedLetter'

describe('AnimatedLetter Component', () => {
  test('Text shows up', () => {
    const letters = ['A', 'i', 'd', 'a', 'n']
    render(
      <AnimatedLetter letterClass="text-animate" letters={letters} idx={10} />
    )
    // Check if spans with our letters array exists
    letters.forEach((letter) => {
      expect(screen.getByText(letter)).toBeInTheDocument()
    })
  })
})
