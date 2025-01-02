"use client"

import { useState } from 'react';
import Link from "next/link";
import { languages } from "../../lib/utils";
import LanguageDropdown from "./ui/LanguageDropdown";

interface CrmLayoutProps {
  children: React.ReactNode;
  activeMenu: string;
}

const CrmLayout: React.FC<CrmLayoutProps> = ({ children, activeMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const isActive = (currentPath:string, targetPath:string) => 
    currentPath === `${targetPath}` ? 'bg-orange-05 text-orange' : '';

  return (
    <div className="flex">
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
          <div className={`mt-5 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'shipments')}`}>
            <div className='flex'>
              <img 
                className='min-w-6 h-6' 
                src={activeMenu === 'shipments' ? '/svgs/truck_active.svg' : '/svgs/truck.svg'}
                alt='Truck Icon' 
              />
              <span className='ml-3 font-medium'>Jo’natmalar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/addresses'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'addresses')}`}>
            <div className='flex'>
              <img 
              className='min-w-6 h-6' 
              src={activeMenu === 'addresses' ? '/svgs/map_active.svg' : '/svgs/map.svg'} 
              alt='Map Icon' 
              />
              <span className='ml-3 font-medium'>Manzillar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/settings'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'settings')}`}>
            <div className='flex'>
              <img 
              className='min-w-6 h-6'
              src={activeMenu === 'settings' ? '/svgs/settings_active.svg' : '/svgs/settings.svg'} 
              alt='Settings Icon' 
              />
              <span className='ml-3 font-medium'>Sozlamalar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/calculator'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'calculator')}`}>
            <div className='flex'>
              <img 
              className='min-w-6 h-6' 
              src={activeMenu === 'calculator' ? '/svgs/calculator_active.svg' : '/svgs/calculator.svg'} 
              alt='Calculator Icon' 
              />
              <span className='ml-3 font-medium'>Kalkulyator</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col w-full bg-whiteBackground">
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
              <img src='/svgs/logout.svg' alt='Logout Icon' />
              <span className='ml-2.5 text-black font-semibold text-sm'>Chiqish</span>
            </button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}

export default CrmLayout;
