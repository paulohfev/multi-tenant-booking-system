import { render } from '@testing-library/react'
import BookingCard from '../BookingCard'

const mockBooking = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  date: '2024-03-21',
  time: '14:30',
  serviceName: 'Test Service',
}

describe('BookingCard', () => {
  it('should match snapshot', () => {
    const { container } = render(<BookingCard booking={mockBooking} />)
    expect(container).toMatchSnapshot()
  })
})
