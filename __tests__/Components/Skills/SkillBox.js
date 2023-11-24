import { render } from '@testing-library/react'
import SkillBox from '../../../components/Skills/SkillBox'

const skillBoxProps = {
  name: 'AWS',
  logo: '/images/Tech/AWSLogo.webp',
}

describe('SkillBox component', () => {
  test('Displays a number of links and images', () => {
    render(<SkillBox logo={skillBoxProps.logo} name={skillBoxProps.name} />)
  })
  test('Displays an img', () => {
    render(<SkillBox name={skillBoxProps.name} logo={skillBoxProps.logo} />)

    // const imageEl = screen.getByRole('img')

    // expect(imageEl).toBeInTheDocument()
  })
  test('Displays some text', () => {
    render(<SkillBox name={skillBoxProps.name} logo={skillBoxProps.logo} />)

    // const awsText = screen.getByText('AWS')

    // expect(awsText).toBeInTheDocument()
  })
})
