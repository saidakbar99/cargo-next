"use client"

import { useState } from 'react';
import CrmLayout from "@/components/CrmLayout";
import { FilterButton } from '@/components/ui/FilterButton';
import { PersonalSettings } from '@/components/PersonalSettings';
import { Recievers } from '@/components/Recievers';

const Settings = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Shaxsiy ma’lumotlar');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // fetchData(filter);
  };

  return (
    <CrmLayout activeMenu="settings">
      <div className="pt-6 h-screen">
        <div className="p-10 bg-white w-[744px] mx-auto rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Sozlamalar</h3>
          <div className="flex justify-between">
            <div className="flex">
              <div onClick={() => handleFilterClick("Shaxsiy ma’lumotlar")}>
                <FilterButton 
                  variant={activeFilter === 'Shaxsiy ma’lumotlar' ? 'active' : ''}
                  text='Shaxsiy ma’lumotlar'
                  className='mr-3'
                />
              </div>
              <div onClick={() => handleFilterClick("Qabul qiluvchilar")}>
                <FilterButton 
                  variant={activeFilter === 'Qabul qiluvchilar' ? 'active' : ''}
                  text='Qabul qiluvchilar'
                />
              </div>
            </div>
            <button className='flex items-center rounded-80 bg-whiteBackground px-4 text-sm font-semibold'>
              <img className='mr-2.5' src="/svgs/lock_black.svg" alt="Lock Icon" />
              Parolni o’zgartirish
            </button>
          </div>
          {activeFilter === 'Shaxsiy ma’lumotlar' ? (
            <PersonalSettings />
          ) : (
            <Recievers />
          )}
        </div>
      </div>
    </CrmLayout>
  )
}

export default Settings;
