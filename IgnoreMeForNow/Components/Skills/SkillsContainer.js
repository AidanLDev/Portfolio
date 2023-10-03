import { render, screen } from '@testing-library/react'
import SkillsContainer from '../../../components/Skills/SkillsContainer'

describe('SkillsContainer component', () => {
  test('A number of images display', () => {
    render(<SkillsContainer />)

    const imageEls = screen.getAllByRole('img')

    expect(imageEls.length).toBeGreaterThan(1)
  })
  test('Text displays', () => {
    render(<SkillsContainer />)

    const imageEls = screen.getByText('React')

    expect(imageEls).toBeInTheDocument()
  })
})
