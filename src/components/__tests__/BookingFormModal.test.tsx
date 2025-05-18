import { render } from '@testing-library/react'
import BookingFormModal from '../BookingFormModal'

// Mock the date utility functions
jest.mock('@/utils/date', () => ({
  getCurrentDate: jest.fn().mockReturnValue('2024-03-21'),
  getCurrentTime: jest.fn().mockReturnValue('14:30'),
}))

const mockService = {
  id: '1',
  centerId: '1',
  name: 'Test Service',
  description: 'Test Description',
  duration: 60,
  price: 100,
}

describe('BookingFormModal', () => {
  it('should match snapshot when modal is open', () => {
    const { container } = render(<BookingFormModal service={mockService} isOpen={true} onClose={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  it('should not render when modal is closed', () => {
    const { container } = render(<BookingFormModal service={mockService} isOpen={false} onClose={() => {}} />)
    expect(container).toMatchSnapshot()
  })
})
