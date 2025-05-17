import { render } from '@testing-library/react'
import BookingCard from '../BookingCard'
import { formatDate } from '@/utils/date'

// Mock the formatDate function
jest.mock('@/utils/date', () => ({
  formatDate: jest.fn().mockReturnValue('March 20, 2024'),
}))

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

  it('should call formatDate with the correct date', () => {
    render(<BookingCard booking={mockBooking} />)
    expect(formatDate).toHaveBeenCalledWith('2024-03-21')
  })
})
