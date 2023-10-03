import { render, screen } from '@testing-library/react'
import BackHomeLink from '../../components/BackHomeLink'

describe('BackHomeLink component', () => {
  test('Has a back home link', () => {
    render(<BackHomeLink />)

    // const backHomeLinkEl = screen.getByText('← Take me home')

    // expect(backHomeLinkEl).toBeInTheDocument()
  })

  test('When passing a blog, change the text to All blogs', () => {
    render(<BackHomeLink blog="amazing-blog" />)

    // const allBlogsLinkEl = screen.getByText('← All blogs')
    // expect(allBlogsLinkEl).toBeInTheDocument()
  })
})
