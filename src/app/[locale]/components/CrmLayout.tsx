"use client"

import { useState } from 'react';
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import ProtectedRoute from './ProtectedRoute';

interface CrmLayoutProps {
  children: React.ReactNode;
  activeMenu: string;
}

const CrmLayout: React.FC<CrmLayoutProps> = ({ children, activeMenu }) => {
  const t = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const isActive = (currentPath:string, targetPath:string) => 
    currentPath === `${targetPath}` ? 'bg-orange-05 text-orange' : '';

  return (
    <ProtectedRoute>
      <div className="flex flex-col lg:flex-row">
        <div className={`border-r border-lightGray p-3 lg:min-h-screen order-2 lg:order-1 
          ${isMenuOpen ? 'min-w-[264px]' : ''}`}
        >
          <div className='hidden lg:flex justify-between items-center pl-4'>
            {isMenuOpen && (
              <Link href='/crm/shipments'>
                <img className='w-[52px] h-[26px]' src='/svgs/cargo_black.svg' alt="Logo Icon" />
              </Link>
            )}
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
          <div className='flex flex-col justify-between lg:h-[90vh]'>
            <div className='flex justify-around lg:flex-col'>
              <Link href='/crm/shipments'>
                <div className={`mt-1 lg:mt-5 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'shipments')}`}>
                  <div className='flex flex-col lg:flex-row items-center'>
                    <img 
                      className='min-w-6 h-6' 
                      src={activeMenu === 'shipments' ? '/svgs/truck_active.svg' : '/svgs/truck.svg'}
                      alt='Truck Icon' 
                    />
                    {isMenuOpen && (
                      <span className='mt-2 lg:mt-0 lg:ml-3 font-medium text-xs lg:text-base'>{t('crmLayoutpost')}</span>
                    )}
                  </div>
                </div>
              </Link>
              <Link href='/crm/addresses'>
                <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'addresses')}`}>
                  <div className='flex flex-col lg:flex-row items-center'>
                    <img 
                    className='min-w-6 h-6' 
                    src={activeMenu === 'addresses' ? '/svgs/map_active.svg' : '/svgs/map.svg'} 
                    alt='Map Icon' 
                    />
                    {isMenuOpen && (
                      <span className='mt-2 lg:mt-0 lg:ml-3 font-medium text-xs lg:text-base'>{t('crmLayoutlands')}</span>
                    )}
                  </div>
                </div>
              </Link>
              <Link href='/crm/settings'>
                <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'settings')}`}>
                  <div className='flex flex-col lg:flex-row items-center'>
                    <img 
                    className='min-w-6 h-6'
                    src={activeMenu === 'settings' ? '/svgs/settings_active.svg' : '/svgs/settings.svg'} 
                    alt='Settings Icon' 
                    />
                    {isMenuOpen && (
                      <span className='mt-2 lg:mt-0 lg:ml-3 font-medium text-xs lg:text-base'>{t('settings')}</span>
                    )}
                  </div>
                </div>
              </Link>
              <Link href='/crm/calculator'>
                <div className={`mt-1 p-3 cursor-pointer rounded-xl ${isActive(activeMenu, 'calculator')}`}>
                  <div className='flex flex-col lg:flex-row items-center'>
                    <img 
                    className='min-w-6 h-6' 
                    src={activeMenu === 'calculator' ? '/svgs/calculator_active.svg' : '/svgs/calculator.svg'} 
                    alt='Calculator Icon' 
                    />
                    {isMenuOpen && (
                      <span className='mt-2 lg:mt-0 lg:ml-3 font-medium text-xs lg:text-base'>{t('crmLayoutcalc')}</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
            {isMenuOpen && (
              <div className='hidden lg:flex flex-col rounded-xl border-solid border-2 justify-center items-center mb-12 '>
                <svg className='mt-6 mb-4' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#FB7C0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15" stroke="#FB7C0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="#FB7C0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 22L21 21" stroke="#FB7C0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='text-center leading-5 max-w-[169px] mb-4 '>{t('crmLayoutunconfirmed')}</span>
                <button className='cursor-pointer border-2 mb-9 rounded-full py-3 px-4 '>{t('crmLayoutconfirm')}</button>
              </div>
            )}
          </div>          
        </div>
        <div className="flex flex-col w-full bg-whiteBackground order-1 lg:order-2">
          <div className="flex border-b border-lightGray p-6 justify-end">
            {/* <div className='relative w-full mr-4'>
              <input 
                type="text" 
                className="border w-full border-lightGray rounded-80 py-3 pr-4 pl-12 focus:outline-none"
                placeholder='Qidirish'
              />
              <img src='/svgs/search.svg' alt="Search Icon" className='absolute top-[14.5px] left-4' />
            </div> */}
            <LocaleSwitcher variant='white' />
            <Link href='/'>
              <button
                className='rounded-80 w-full border border-lightGray flex justify-center px-4 py-3 leading-none ml-3'
                onClick={() => localStorage.removeItem('access_token')}
              >
                <img src='/svgs/logout.svg' alt='Logout Icon' />
                <span className='ml-2.5 font-semibold text-sm'>{t("crmLayoutexit")}</span>
              </button>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default CrmLayout;
