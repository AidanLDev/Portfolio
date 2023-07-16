import { render, screen } from '@testing-library/react'
import NavLink from '../../../components/Navbar/NavLink'

const navLinkProps = {
  item: {
    link: 'http://blog.aidanlowson.com',
    label: 'Double A Team blog',
  },
  active: '.active',
}

describe('NavLink component', () => {
  test('Renders a nav link prop', () => {
    render(<NavLink item={navLinkProps.item} active={navLinkProps.active} />)

    const linkEl = screen.getAllByRole('link')

    expect(linkEl.length).toBe(1)
  })
})
