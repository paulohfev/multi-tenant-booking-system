import { Booking } from "@/types/Booking";
import { formatDate } from "@/utils/formatDate";

export type BookingCardProps = {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {booking.name}
      </h3>
      <p className="text-gray-600 mb-4">{booking.email}</p>
      <p className="text-gray-600 mb-4">{formatDate(booking.date)}</p>
      <p className="text-gray-600 mb-4">{booking.time}</p>
    </div>
  )
}

export default BookingCard;