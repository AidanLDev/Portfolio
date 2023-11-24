import { render, screen } from '@testing-library/react'
import AboutMeCard from '../../../components/Home/AboutMeCard'

describe('About me card tests', () => {
  test('Card displays a title and subtitle', () => {
    render(<AboutMeCard />)

    const titleEl = screen.getByText('Software Engineer')
    const subTitleEl = screen.getByText(
      'Full time Software Engineer, life long learner and programming enthusiast. Hover for social media links.'
    )

    expect(titleEl).toBeInTheDocument()
    expect(subTitleEl).toBeInTheDocument()
  })

  test('Card renders links', () => {
    render(<AboutMeCard />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(1)
  })
})
