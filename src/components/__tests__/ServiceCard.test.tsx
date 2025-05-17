import { render } from '@testing-library/react'
import ServiceCard from '../ServiceCard'

const mockService = {
  id: '1',
  centerId: '1',
  name: 'Test Service',
  description: 'Test Description',
  duration: 60,
  price: 100,
}

describe('ServiceCard', () => {
  it('should match snapshot', () => {
    const { container } = render(<ServiceCard service={mockService} />)
    expect(container).toMatchSnapshot()
  })
})
