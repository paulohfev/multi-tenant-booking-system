import { create } from 'zustand';
import { Center } from '@/types/Center';
import { getCenters, getCenterById } from '@/services/centers';

type CentersState = {
  centers: Center[];
  currentCenter: Center | null;
  isLoading: boolean;
  fetchCenters: () => Promise<void>;
  fetchCenterById: (id: string) => Promise<void>;
}

export const useCentersStore = create<CentersState>((set) => ({
  centers: [],
  currentCenter: null,
  isLoading: false,

  fetchCenters: async () => {
    set({ isLoading: true });
    try {
      const centers = await getCenters();
      set({ centers, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  },

  fetchCenterById: async (id: string) => {
    set({ isLoading: true });
    try {
      const center = await getCenterById(id);
      set({ currentCenter: center || null, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
})); 