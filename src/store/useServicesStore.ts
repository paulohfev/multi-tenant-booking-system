import { create } from 'zustand';
import { Service } from '@/types/Service';
import { getServices, getServicesByCenterId } from '@/services/services';

interface ServicesState {
  services: Service[];
  isLoading: boolean;
  error: string | null;
  fetchServicesByCenterId: (centerId: string) => Promise<void>;
}

export const useServicesStore = create<ServicesState>((set) => ({
  services: [],
  isLoading: false,
  error: null,

  fetchServicesByCenterId: async (centerId: string) => {
    set({ isLoading: true, error: null });
    try {
      const services = await getServicesByCenterId(centerId);
      set({ services, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch services', isLoading: false });
    }
  },
})); 