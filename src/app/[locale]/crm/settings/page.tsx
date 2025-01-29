"use client"

import { useState } from 'react';
import CrmLayout from "@/components/CrmLayout";
import { FilterButton } from '@/components/ui/FilterButton';
import { PersonalSettings } from '@/components/PersonalSettings';
import { Recievers } from '@/components/Recievers';
import { Modal } from '@/components/ui/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';

const Settings = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Identifikatsiya');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const cleanInputs = () => {
    setCurrentPassword('');
    setNewPassword('');
  }

  const changePassword = async () => {
    const token = localStorage.getItem("access_token");
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}customer/change-password`,
        {
          current_password: currentPassword,
          new_password: newPassword,
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      
      setIsOpen(false);
      cleanInputs();
      toast.success('Parol o’zgartirildi');
    } catch (error) {
      console.log(error);
      toast.error('Eski parol noto’g’ri');
    }
  }

  return (
    <>
      <CrmLayout activeMenu="settings">
        <div className="pt-6 h-screen">
          <div className="p-10 bg-white w-[744px] mx-auto rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Sozlamalar</h3>
            <div className="flex justify-between">
              <div className="flex">
                <div onClick={() => handleFilterClick("Identifikatsiya")}>
                  <FilterButton 
                    variant={activeFilter === 'Identifikatsiya' ? 'active' : ''}
                    text='Identifikatsiya'
                    className='mr-3'
                  />
                </div>
                {/* <div onClick={() => handleFilterClick("Qabul qiluvchilar")}>
                  <FilterButton 
                    variant={activeFilter === 'Qabul qiluvchilar' ? 'active' : ''}
                    text='Qabul qiluvchilar'
                  />
                </div> */}
              </div>
              <button 
                className='flex items-center rounded-80 bg-whiteBackground px-4 text-sm font-semibold'
                onClick={() => setIsOpen(true)}
              >
                <img className='mr-2.5' src="/svgs/lock_black.svg" alt="Lock Icon" />
                Parolni o’zgartirish
              </button>
            </div>
            {activeFilter === 'Identifikatsiya' ? (
              <PersonalSettings />
            ) : (
              <Recievers />
            )}
          </div>
        </div>
      </CrmLayout>
      <Modal 
        title="Parolni o'zgartirish" 
        isOpen={isOpen} 
        onClose={() => {setIsOpen(false); cleanInputs()}}
      >
        <form className="mt-4">
          <div className='mb-3'>
            <label className="block text-sm font-medium mb-1">Hozirgi Parol</label>
            <input
              type="text"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Yangi Parol</label>
            <input
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
        </form>
        <div className="flex justify-between mt-8">
          <button
            className="px-5 py-3 border border-lightGray rounded-80 w-full leading-none font-bold mr-6"
            onClick={() => {setIsOpen(false); cleanInputs()}}
          >
            Bekor qilish
          </button>
          <button 
            className="bg-orange px-5 py-3 rounded-80 text-white leading-none w-full font-bold"
            onClick={changePassword}
          >
            Saqlash
          </button>
        </div>
      </Modal>
    </>
  )
}

export default Settings;
