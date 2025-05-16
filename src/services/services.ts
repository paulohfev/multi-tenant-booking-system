import { Service } from '@/types/Service';
import { mockServices } from '@/data/mockServices';
import { mockApiDelay } from '@/utils/mockApiDelay';

export const getServices = async (): Promise<Service[]> => {
  await mockApiDelay(1500);
  return mockServices;
};

export const getServicesByCenterId = async (centerId: string): Promise<Service[]> => {
  await mockApiDelay(1500);
  return mockServices.filter(service => service.centerId === centerId);
}; 