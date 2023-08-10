import { render, screen } from '@testing-library/react'
import ImageLink from '../../../components/Home/ImageLink'

describe('ImageLink component tests', () => {
  test('Renders a link and an image', () => {
    render(
      <ImageLink
        link="https://github.com/AidanLDev/Portfolio"
        imagePath="/images/Logos/GithubLogo.png"
        alt="GitHub logo"
      />
    )

    const ghLinkEl = screen.getByRole('link')
    const ghLogoEl = screen.getByRole('img')

    expect(ghLinkEl).toBeInTheDocument()
    expect(ghLogoEl).toBeInTheDocument()
  })
})
