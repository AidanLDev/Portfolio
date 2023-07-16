import { render, screen } from '@testing-library/react'
import SEO from '../../../components/SEO/index'
import ProjectCard from '../../../components/Projects/ProjectCard'

// TODO: Add --save-dev jest-matchmedia-mock

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
    render(<ProjectCard />)
    screen.debug()
  })
})
