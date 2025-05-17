import { render } from '@testing-library/react'
import LoadingSpinner from '../LoadingSpinner'

describe('LoadingSpinner', () => {
  it('should match snapshot', () => {
    const { container } = render(<LoadingSpinner />)
    expect(container).toMatchSnapshot()
  })
})
