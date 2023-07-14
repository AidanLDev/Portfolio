import ScrollDown from './ScrollDown'
import { render, screen } from '@testing-library/react'

describe('ScrollDown component', () => {
  test('Should display scroll down text after 6s', () => {
    render(<ScrollDown />)

    const scrollDownElement = screen.getByText('Scroll Down...')
    expect(scrollDownElement).toBeInTheDocument()
  })
})
