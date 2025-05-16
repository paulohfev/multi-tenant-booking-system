import { Center } from '@/types/Center';
import { mockCenters } from '@/data/mockCenters';
import { mockApiDelay } from '@/utils/mockApiDelay';

export const getCenters = async (): Promise<Center[]> => {
  await mockApiDelay(1500);
  return mockCenters;
};

export const getCenterById = async (id: string): Promise<Center | undefined> => {
  await mockApiDelay(1500);
  return mockCenters.find(center => center.id === id);
}; 