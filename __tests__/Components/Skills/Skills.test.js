import { render, screen } from '@testing-library/react'
import Skills from '../../../components/Skills/Skills'

describe('Skills component', () => {
  test('A number of images display', () => {
    render(<Skills />)
    const imageEls = screen.getAllByRole('img')

    expect(imageEls.length).toBeGreaterThan(1)
  })
  test('Text displays', () => {
    render(<Skills />)
    const textEl = screen.getByText('AWS')

    expect(textEl).toBeInTheDocument()
  })
})
