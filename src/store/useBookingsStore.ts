import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Booking } from '@/types/Booking';
import { createBooking } from '@/services/bookings';

interface BookingsState {
  bookings: Booking[];
  isLoading: boolean;
  error: string | null;
  createBooking: (booking: Omit<Booking, 'id'>) => Promise<void>;
}

export const useBookingsStore = create<BookingsState>()(
  persist(
    (set) => ({
      bookings: [],
      isLoading: false,
      error: null,

      createBooking: async (bookingData) => {
        set({ isLoading: true, error: null });
        try {
          const newBooking = await createBooking(bookingData);
          set((state) => ({
            bookings: [...state.bookings, newBooking],
            isLoading: false,
          }));
        } catch (error) {
          set({ error: 'Failed to create booking', isLoading: false });
        }
      },
    }),
    {
      name: 'bookings-storage',
      partialize: (state) => ({ bookings: state.bookings }),
    }
  )
); 