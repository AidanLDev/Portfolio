import { render, screen } from '@testing-library/react'
import ProjectCard from '../../../components/Projects/ProjectCard'

// fix for win.matchMedia is not a function
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const projectCardProps = {
  img: 'DoubleATeamBlog.jpg',
  tooltip: 'Click to view The Double A Team blog',
  link: 'https://blog.aidanlowson.com',
}

describe('ProjectCard Component', () => {
  /*
    If GH Link is passed to the component, add link for GitHub page
    If GH link is NOT passed, don't display GH link
  */
  test('Card renders with an image', () => {
    render(
      <ProjectCard
        img={projectCardProps.img}
        link={projectCardProps.link}
        tooltip={projectCardProps.tooltip}
      />
    )

    const imgEl = screen.getByRole('img')

    expect(imgEl).toBeInTheDocument()
  })
})
