import { create } from 'zustand'
import { Service } from '@/types/Service'
import { getServicesByCenterId } from '@/services/services'

type ServicesState = {
  services: Service[]
  isLoading: boolean
  fetchServicesByCenterId: (centerId: string) => Promise<void>
}

export const useServicesStore = create<ServicesState>((set) => ({
  services: [],
  isLoading: false,

  fetchServicesByCenterId: async (centerId: string) => {
    set({ isLoading: true })
    try {
      const services = await getServicesByCenterId(centerId)
      set({ services, isLoading: false })
    } catch (error) {
      console.error(error)
      set({ isLoading: false })
    }
  },
}))
