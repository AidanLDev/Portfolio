import { render, screen } from '@testing-library/react'
import Navbar from '../../../components/Navbar/Navbar'

describe('Navbar component', () => {
  test('Displays a navbar with some links', () => {
    render(<Navbar />)

    const links = screen.getAllByRole('link')

    expect(links.length).toBeGreaterThan(1)
  })
})
