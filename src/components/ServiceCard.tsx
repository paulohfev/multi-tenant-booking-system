import { Service } from "@/types/Service";

export type ServiceCardProps = {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {service.name}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>Duration: {service.duration} min</span>
        <span className="font-semibold text-gray-900">
          ${service.price}
        </span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
        Book Now
      </button>
    </div>
  )
}

export default ServiceCard;