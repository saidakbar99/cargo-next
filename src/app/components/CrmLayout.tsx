"use client"

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { languages } from "../../utils/utils";
import LanguageDropdown from "./ui/LanguageDropdown";

interface CrmLayoutProps {
  children: React.ReactNode;
}

const CrmLayout: React.FC<CrmLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const isActive = (currentPath:string, targetPath:string) => 
    currentPath === `/crm/${targetPath}` ? 'bg-orange-05 text-orange' : '';

  return (
    <div className="flex h-screen">
      <div className="min-w-[264px] border-r border-lightGray p-3">
        <div className='flex justify-between items-center pl-3'>
          <img src='/svgs/cargo_black.svg' alt="Logo Icon" />
          <svg
            className={`w-4 h-4 mb-1 transition-transform cursor-pointer ${isMenuOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <Link href='/crm/shipments'>
          <div className={`mt-5 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'shipments')}`}>
            <div className='flex'>
              <img 
                className='min-w-6 h-6' 
                width={24} 
                height={24} 
                src={pathname === '/crm/shipments' ? '/svgs/truck_active.svg' : '/svgs/truck.svg'}
                alt='Truck Icon' 
              />
              <span className='ml-3 font-medium'>Jo’natmalar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/addresses'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'addresses')}`}>
            <div className='flex'>
              <img 
              className='min-w-6 h-6' 
              width={24} 
              height={24} 
              src={pathname === '/crm/addresses' ? '/svgs/map_active.svg' : '/svgs/map.svg'} 
              alt='Map Icon' 
              />
              <span className='ml-3 font-medium'>Manzillar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/settings'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'settings')}`}>
            <div className='flex'>
              <img 
              className='min-w-6 h-6' 
              width={24} 
              height={24} 
              src={pathname === '/crm/settings' ? '/svgs/settings_active.svg' : '/svgs/settings.svg'} 
              alt='Settings Icon' 
              />
              <span className='ml-3 font-medium'>Sozlamalar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/calculator'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'calculator')}`}>
            <div className='flex'>
              <img 
              className='min-w-6 h-6' 
              width={24} 
              height={24} 
              src={pathname === '/crm/calculator' ? '/svgs/calculator_active.svg' : '/svgs/calculator.svg'} 
              alt='Calculator Icon' 
              />
              <span className='ml-3 font-medium'>Kalkulyator</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex border-b border-lightGray p-6">
          <div className='relative w-full mr-4'>
            <input 
              type="text" 
              className="border w-full border-lightGray rounded-80 py-3 pr-4 pl-12 focus:outline-none"
              placeholder='Qidirish'
            />
            <img src='/svgs/search.svg' alt="Search Icon" className='absolute top-[14.5px] left-4' />
          </div>
          <LanguageDropdown options={languages} classname="mr-3" />
          <Link href='/'>
            <button
              className='rounded-80 w-full border border-lightGray flex justify-center px-4 py-3'
            >
              <img src='/svgs/logout.svg' width={20} height={20} alt='Logout Icon' />
              <span className='ml-2.5 text-black font-semibold text-sm'>Chiqish</span>
            </button>
          </Link>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CrmLayout;
