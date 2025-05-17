'use client';

import { useEffect } from 'react';
import CenterCard from '@/components/CenterCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import BookingCard from '@/components/BookingCard';
import { useBookingsStore } from '@/store/useBookingsStore';
import { useCentersStore } from '@/store/useCentersStore';

export default function CentersPage() {
  const { centers, isLoading, fetchCenters } = useCentersStore();
  const { bookings, isLoading: isBookingsLoading } = useBookingsStore();

  useEffect(() => {
    fetchCenters();
  }, [fetchCenters]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {centers.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Beauty Centers</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {centers.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        </div>
      )}

      {isBookingsLoading ? (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        bookings.length > 0 && (
          <div className="max-w-7xl mx-auto mt-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Bookings</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
} 