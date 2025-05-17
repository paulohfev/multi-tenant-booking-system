import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/centers" className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              <div className="flex-shrink-0">
                <Image src="/logos/company.svg" alt="Beauty Center" width={32} height={32} />
              </div>
              <div className="flex items-baseline space-x-4 ml-2">
                Multi-tenant Booking System
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;