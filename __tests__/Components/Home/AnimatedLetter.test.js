import { render, screen } from '@testing-library/react'
import AnimatedLetter from '../../../components/Home/AnimatedLetter'

describe('AnimatedLetter Component', () => {
  test('Text shows up', () => {
    const letters = ['i', 'd', 'a', 'n', ' ']
    render(
      <AnimatedLetter letterClass="text-animate" letters={letters} idx={10} />
    )
    screen.debug()
  })
})
