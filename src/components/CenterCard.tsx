import Image from 'next/image'
import Link from 'next/link'
import { Center } from '@/types/Center'

export type CenterCardProps = {
  center: Center
}

const CenterCard: React.FC<CenterCardProps> = ({ center }) => {
  return (
    <Link key={center.id} href={`/centers/${center.id}`}>
      <div className='flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 h-[320px]'>
        <div className='relative w-20 h-20 mb-4'>
          <Image src={center.logo} alt={`${center.name} logo`} fill className='object-contain' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>{center.name}</h3>
        <p className='text-gray-600'>{center.description}</p>
        <div className='mt-auto'>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'>
            {center.services} services available
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CenterCard
