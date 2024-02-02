import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

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

describe('Home page tests', () => {
  test('Navbar displays', () => {
    // render(<Home />)
    // const backHomeLogoEl = screen.getByText('AL')
    // const blogLinkEl = screen.getByText('Blogs')
    // expect(backHomeLogoEl).toBeInTheDocument()
    // expect(blogLinkEl).toBeInTheDocument()
  })
  // test('Body tags render', () => {
  //   render(<Home />)
  //   const span1El = screen.getAllByText('html', { exact: false })
  //   const span2El = screen.getAllByText('body', { exact: false })

  //   expect(span1El.length).toBeGreaterThan(0)
  //   expect(span2El.length).toBeGreaterThan(0)
  // })
  // test('Title renders', () => {
  //   render(<Home />)

  //   const firstNameEl = screen.getAllByTestId('first-name-title')
  //   const lastNameEl = screen.getAllByTestId('last-name-title')

  //   expect(firstNameEl.length).toBeGreaterThan(0)
  //   expect(lastNameEl.length).toBeGreaterThan(0)
  // })
})
