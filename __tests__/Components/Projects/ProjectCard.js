import { render, screen } from '@testing-library/react'
import ProjectCard from '../../../components/Projects/ProjectCard'

// fix for win.matchMedia is not a function
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // Deprecated
//     removeListener: jest.fn(), // Deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// })

const projectCardProps = {
  img: 'DoubleATeamBlog.jpg',
  tooltip: 'Click to view The Double A Team blog',
  link: 'https://blog.aidanlowson.com',
  gitHubLink: 'https://github.com/AidanLDev/doubleateam',
  date: '2023/12/10',
  description: 'Labore laborum eiusmod voluptate sit duis consectetur. Excepteur incididunt aliqua consectetur Lorem nostrud aliquip proident adipisicing excepteur aliquip. Veniam nisi deserunt pariatur exercitation. Veniam Lorem ipsum ullamco nulla pariatur officia occaecat anim. Labore laborum culpa amet fugiat commodo aliquip ea cupidatat velit veniam laborum. Duis eu nulla cupidatat quis ex labore laborum est deserunt magna amet dolore commodo pariatur. Consectetur irure ea amet ullamco id laboris cillum irure nostrud dolor ex et ea laboris.',
  tags: ['Aidan', 'JavaScript', 'TypeScript', 'Jest'],
  title: 'Double A Team blogs'
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
        date={projectCardProps.date}
        description={projectCardProps.description}
        tags={projectCardProps.tags}
        gitHubLink={projectCardProps.gitHubLink}
        title={projectCardProps.title}
      />
    )

    const imgEl = screen.getByRole('img')

    expect(imgEl).toBeInTheDocument()
  })
})
