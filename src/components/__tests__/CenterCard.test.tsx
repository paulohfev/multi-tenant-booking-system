import { render } from '@testing-library/react'
import CenterCard from '../CenterCard'

const mockCenter = {
  id: '1',
  name: 'Test Center',
  description: 'Test Description',
  logo: '/logos/test-center.svg',
  services: 5,
}

describe('CenterCard', () => {
  it('should match snapshot', () => {
    const { container } = render(<CenterCard center={mockCenter} />)
    expect(container).toMatchSnapshot()
  })
})
