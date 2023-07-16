import { render, screen } from '@testing-library/react'
import ProjectContainer from '../../../components/Projects/ProjectContainer'

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

describe('ProjectContainer component', () => {
  test('Displays projects header', () => {
    render(<ProjectContainer />)

    const headerEl = screen.getByText('Projects')
    expect(headerEl).toBeInTheDocument()
  })
})
