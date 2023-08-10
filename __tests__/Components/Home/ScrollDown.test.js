import ScrollDown from '../../../components/Home/ScrollDown'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('ScrollDown component', () => {
  test('Should display scroll down text after 6s', () => {
    render(<ScrollDown />)

    const scrollDownElement = screen.getByText('Scroll Down...')
    expect(scrollDownElement).toBeInTheDocument()
  })
})
