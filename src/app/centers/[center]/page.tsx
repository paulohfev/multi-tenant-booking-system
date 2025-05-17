'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useServicesStore } from '@/store/useServicesStore';
import { useEffect } from 'react';
import { useCentersStore } from '@/store/useCentersStore';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServiceCard from '@/components/ServiceCard';
import { showToast } from '@/utils/showToast';

export default function CenterPage() {
  const { center: centerId } = useParams();

  const { currentCenter, isLoading: isLoadingCenter, fetchCenterById } = useCentersStore();
  const { services, isLoading: isLoadingServices, fetchServicesByCenterId } = useServicesStore();

  useEffect(() => {
    fetchCenterById(centerId as string);
    fetchServicesByCenterId(centerId as string);
  }, [fetchCenterById, fetchServicesByCenterId, centerId]);

  if (isLoadingCenter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        {currentCenter && (
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <Image
                  src={currentCenter.logo}
                  alt={`${currentCenter.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{currentCenter.name}</h1>
                <p className="text-gray-600">{currentCenter.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {isLoadingServices ? (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        services.length > 0 && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
} 