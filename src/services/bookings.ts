import { Booking } from '@/types/Booking'
import { mockApiDelay } from '@/utils/mockApiDelay'

export const createBooking = async (booking: Omit<Booking, 'id'>): Promise<Booking> => {
  await mockApiDelay(1500)

  const newBooking: Booking = {
    ...booking,
    id: `booking-${Date.now()}`, // Generate a unique ID
  }

  return newBooking
}
