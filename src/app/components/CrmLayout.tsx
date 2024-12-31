"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { languages } from "../../utils/utils";
import LogoutIcon from '../../../public/svgs/logout.svg';
import LanguageDropdown from "./ui/LanguageDropdown";
import LogoIcon from '../../../public/svgs/cargo_black.svg';
import TruckActiveIcon from '../../../public/svgs/truck_active.svg'
import TruckIcon from '../../../public/svgs/truck.svg'
import MapIcon from '../../../public/svgs/map_icon.svg'
import SettingsIcon from '../../../public/svgs/settings_icon.svg'
import CalculatorIcon from '../../../public/svgs/calculator_icon.svg'

interface CrmLayoutProps {
  children: React.ReactNode;
}

const CrmLayout: React.FC<CrmLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const isActive = (currentPath:string, targetPath:string) => 
    currentPath === `/crm/${targetPath}` ? 'bg-orange-05 text-orange' : '';

  const isShipments = pathname === '/crm/shipments'
  return (
    <div className="flex h-screen">
      <div className="min-w-[264px] border-r border-lightGray p-3">
        <div className='flex justify-between items-center'>
          <Image src={LogoIcon} alt="Logo Icon" />
          <svg
            className={`w-4 h-4 transition-transform cursor-pointer ${isMenuOpen ? "rotate-180" : ""}`}
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
          <div className={`mt-8 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'shipments')}`}>
            <div className='flex'>
              <Image 
                className='min-w-6 h-6' 
                width={24} 
                height={24} 
                src={pathname === '/crm/shipments' ? TruckActiveIcon : TruckIcon}
                alt='Truck Icon' 
              />
              <span className='ml-3 font-medium'>Jo’natmalar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/addresses'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'addresses')}`}>
            <div className='flex'>
              <Image className='min-w-6 h-6' width={24} height={24} src={MapIcon} alt='Map Icon' />
              <span className='ml-3 font-medium'>Manzillar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/settings'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'settings')}`}>
            <div className='flex'>
              <Image className='min-w-6 h-6' width={24} height={24} src={SettingsIcon} alt='Settings Icon' />
              <span className='ml-3 font-medium'>Sozlamalar</span>
            </div>
          </div>
        </Link>
        <Link href='/crm/calculator'>
          <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(pathname, 'calculator')}`}>
            <div className='flex'>
              <Image className='min-w-6 h-6' width={24} height={24} src={CalculatorIcon} alt='Calculator Icon' />
              <span className='ml-3 font-medium'>Kalkulyator</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex border-b border-lightGray p-6">
          <input type="text" className="w-full border border-lightGray mr-4 rounded-80 py-3 px-4" />
          <LanguageDropdown options={languages} classname="mr-3" />
          <Link href='/'>
            <button
              className='rounded-80 w-full border border-lightGray flex justify-center px-4 py-3'
            >
              <Image src={LogoutIcon} width={20} height={20} alt='Logout Icon' />
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
