import { render, screen } from '@testing-library/react'
import Certifications from '../../../components/Skills/Certifications'

describe('Certification component', () => {
  test('A number of images and links display', () => {
    render(<Certifications />)

    const imageEls = screen.getAllByRole('img')
    const linkEls = screen.getAllByRole('link')

    expect(imageEls.length).toBeGreaterThan(1)
    expect(linkEls.length).toBeGreaterThan(1)
  })
})
