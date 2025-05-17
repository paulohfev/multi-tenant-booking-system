import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Booking } from '@/types/Booking'
import { createBooking } from '@/services/bookings'

type BookingsState = {
  bookings: Booking[]
  isLoading: boolean
  createBooking: (booking: Omit<Booking, 'id'>) => Promise<void>
}

export const useBookingsStore = create<BookingsState>()(
  persist(
    (set) => ({
      bookings: [],
      isLoading: false,

      createBooking: async (bookingData) => {
        set({ isLoading: true })
        try {
          const newBooking = await createBooking(bookingData)
          set((state) => ({
            bookings: [...state.bookings, newBooking],
            isLoading: false,
          }))
        } catch (error) {
          console.error(error)
          set({ isLoading: false })
        }
      },
    }),
    {
      name: 'bookings-storage',
      partialize: (state) => ({ bookings: state.bookings }),
    }
  )
)
