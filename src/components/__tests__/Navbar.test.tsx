import { render } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('should match snapshot', () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})
