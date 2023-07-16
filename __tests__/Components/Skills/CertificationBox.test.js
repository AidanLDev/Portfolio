import { render, screen } from '@testing-library/react'
import CertificationBox from '../../../components/Skills/CertificationBox'

const certBoxProps = {
  name: 'AWS',
  img: 'AWSCPBadge.png',
  link: 'https://www.udemy.com/certificate/UC-A5AOU8C4/',
}

describe('CertificationBox component', () => {
  test('Displays a link', () => {
    render(
      <CertificationBox
        name={certBoxProps.name}
        img={certBoxProps.img}
        link={certBoxProps.link}
      />
    )
    const linkEl = screen.getByRole('link')
    expect(linkEl).toBeInTheDocument()
  })
  test('Displays an image', () => {
    render(<CertificationBox />)

    const imgEl = screen.getByRole('img')
    expect(imgEl).toBeInTheDocument()
  })
})
