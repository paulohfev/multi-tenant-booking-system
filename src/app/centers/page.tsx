'use client';

import { useEffect } from 'react';
import { useCentersStore } from '@/store/useCentersStore';
import CenterCard from '@/components/CenterCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function CentersPage() {
  const { centers, isLoading, fetchCenters } = useCentersStore();

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
    </div>
  );
} 