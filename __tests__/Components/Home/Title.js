import { render, screen } from '@testing-library/react'
import Title from '../../../components/Home/Title'
import '@testing-library/jest-dom'

describe('Title component', () => {
  test('Displays a couple of spans', () => {
    render(<Title />)

    const span1El = screen.getByText('A')
    const span2El = screen.getByText('L')

    expect(span1El).toBeInTheDocument()
    expect(span2El).toBeInTheDocument()
  })
})
