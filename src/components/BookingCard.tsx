import { Booking } from '@/types/Booking'
import { formatDate } from '@/utils/date'

export type BookingCardProps = {
  booking: Booking
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200'>
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>{booking.serviceName}</h3>

      <p className='text-gray-600 mb-2'>{booking.name}</p>
      <p className='text-gray-600 mb-2'>{booking.email}</p>

      <footer className='flex justify-between items-center mt-4'>
        <p className='text-gray-600'>{formatDate(booking.date)}</p>
        <p className='text-gray-600'>{booking.time}</p>
      </footer>
    </div>
  )
}

export default BookingCard
