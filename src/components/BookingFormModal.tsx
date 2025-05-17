import { useMemo, useState } from 'react';
import { useBookingsStore } from '@/store/useBookingsStore';
import { showToast } from '@/utils/showToast';
import { getCurrentDate, getCurrentTime } from '@/utils/date';
import { CreateBookingFormData } from '@/types/CreateBookingFormData';
import { Service } from '@/types/Service';
import InputField from './InputField';
import XIcon from './XIcon';

export type BookingFormModalProps = {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const BookingFormModal: React.FC<BookingFormModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<CreateBookingFormData>({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const areAllFieldsFilled = useMemo(() => Object.values(formData).every((value) => value !== ''), [formData]);

  const { createBooking, isLoading } = useBookingsStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBooking({
        ...formData,
        serviceName: service.name,
      });
      showToast('Booking created successfully!', 'success');
      onClose();
    } catch (error) {
      showToast(error as string, 'error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  const minTime = formData.date === getCurrentDate() ? getCurrentTime() : undefined;

  return (
    <div className="fixed inset-0 bg-gray-500/20 backdrop-brightness-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Book {service.name}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            <XIcon classNameStyling="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={getCurrentDate()}
          />

          <InputField
            label="Time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            min={minTime}
          />

          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading || !areAllFieldsFilled}
              className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-400"
            >
              {isLoading ? 'Creating Booking...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal; 