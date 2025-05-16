import { create } from 'zustand';
import { Center } from '@/types/Center';
import { getCenters, getCenterById } from '@/services/centers';

interface CentersState {
  centers: Center[];
  currentCenter: Center | null;
  isLoading: boolean;
  error: string | null;
  fetchCenters: () => Promise<void>;
  fetchCenterById: (id: string) => Promise<void>;
}

export const useCentersStore = create<CentersState>((set) => ({
  centers: [],
  currentCenter: null,
  isLoading: false,
  error: null,

  fetchCenters: async () => {
    set({ isLoading: true, error: null });
    try {
      const centers = await getCenters();
      set({ centers, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch centers', isLoading: false });
    }
  },

  fetchCenterById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const center = await getCenterById(id);
      set({ currentCenter: center || null, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch center', isLoading: false });
    }
  },
})); 