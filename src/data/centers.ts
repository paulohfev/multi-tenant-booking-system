import { Center } from '../types/Center';

export const centers: Center[] = [
  {
    id: '1-beauty-haven',
    name: 'Beauty Haven',
    description: 'Your premier destination for beauty and wellness services. Experience luxury treatments in a serene environment.',
    logo: '/logos/beauty-haven.svg',
    services: [
      {
        id: '1',
        name: 'Classic Manicure',
        description: 'Basic nail care and polish application',
        duration: 45,
        price: 35
      },
      {
        id: '2',
        name: 'Deluxe Facial',
        description: 'Deep cleansing facial with premium products',
        duration: 60,
        price: 85
      }
    ]
  },
  {
    id: '2-glamour-studio',
    name: 'Glamour Studio',
    description: 'Where beauty meets innovation. Offering cutting-edge treatments and personalized care.',
    logo: '/logos/glamour-studio.svg',
    services: [
      {
        id: '1',
        name: 'Haircut & Styling',
        description: 'Professional haircut and styling service',
        duration: 60,
        price: 65
      },
      {
        id: '2',
        name: 'Full Body Massage',
        description: 'Relaxing full body massage with essential oils',
        duration: 90,
        price: 120
      }
    ]
  }
]; 