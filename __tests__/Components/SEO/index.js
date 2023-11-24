import { render, screen } from '@testing-library/react'
import SEO from '../../../components/SEO/index'

const seoProps = {
  title: 'Aidan Lowson | Portfolio',
  description:
    'Showcasing my personal projects and anything else I feel should be shared with the world.',
  url: 'https://aidanlowson.com',
}

describe('SEO component', () => {
  test('Handles SEO props without a problem', () => {
    render(
      <SEO
        title={seoProps.title}
        description={seoProps.description}
        url={seoProps.url}
      />
    )
  })
})
