import { render, screen } from '@testing-library/react'
import HtmlBodyTags from '../../../components/htmlTags/HtmlBodyTags'

describe('HtmlBodyTags component', () => {
  test('Displays an opening html and body tag', () => {
    render(<HtmlBodyTags />)

    const span1El = screen.getByText('html', { exact: false })
    const span2El = screen.getByText('body', { exact: false })

    expect(span1El).toBeInTheDocument()
    expect(span2El).toBeInTheDocument()
  })
})
