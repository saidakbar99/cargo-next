"use client"

import { useState } from 'react';
import { StoreItem } from "./StoreItem"
import { Pagination } from "./ui/Pagination"
import { useTranslations } from 'next-intl';
import { Modal } from './ui/Modal';
import Image from 'next/image';
import AboutUsImage from '../../../../public/images/about_us_image.png';

const categories = [
  {
    name: "Одежда, обувь и аксессуары"
  },
  {
    name: "Спорт"
  },
  {
    name: "Здоровье и красота"
  },
  {
    name: "Украшения и подарки"
  },
  {
    name: "Детская одежда и игрушки"
  },
  {
    name: "Спорт"
  }
]

const stores = [
  {
    id: 1,
    storeName: 'Trendyol',
    description: 'Здесь вы найдете широкий выбор витаминов и пищевых добавок, а также товаров для здоровья и ухода.',
    icon: '/svgs/store_logo.svg',
  },
  {
    id: 2,
    storeName: 'Trendyol',
    description: 'Здесь вы найдете широкий выбор витаминов и пищевых добавок, а также товаров для здоровья и ухода.',
    icon: '/svgs/store_logo.svg',
  },
  {
    id: 3,
    storeName: 'Trendyol',
    description: 'Здесь вы найдете широкий выбор витаминов и пищевых добавок, а также товаров для здоровья и ухода.',
    icon: '/svgs/store_logo.svg',
  },
  {
    id: 4,
    storeName: 'Trendyol',
    description: 'Здесь вы найдете широкий выбор витаминов и пищевых добавок, а также товаров для здоровья и ухода.',
    icon: '/svgs/store_logo.svg',
  },
]

export const BestStores = () => {
  const t = useTranslations();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStore, setSelectedStore] = useState<any>(null);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id='stores' className="mt-[50px] lg:mt-[140px]">
      <h2 className="text-[32px] lg:text-[50px] font-bold text-center font-roadRadio">{t('storetitle')}</h2>
      <div className="mt-9 lg:mt-12 flex">
        <div className="hidden lg:flex lg:flex-col mr-6 border border-grayBorder rounded-xl p-6  w-[364px] h-fit">
          <span className="font-medium text-xl">{t('storecategory')}</span>
          <span className="mt-4 font-semibold">{t('storeall')}</span>
          {categories.map((category: {name:string}, index: number) => (
            <span key={index} className="mt-4 opacity-60 cursor-pointer">{t('storetype' + index)}</span>
          ))}
        </div>
        <div>
          {stores.map((store) => (
            <StoreItem 
              key={store.id} 
              onClick={() => setSelectedStore(store)}
              {...store} 
            />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Modal title={t("bestStoreModalTitle")} isOpen={selectedStore} onClose={() => setSelectedStore(null)} >
        <div className="mt-6">
          <span className="text-gray-300">
          {t('bestStoreModalText')}
          </span>
          <Image className="my-6" width={800} height={400} src={AboutUsImage} alt="dialog image" />
          <span className="text-gray-300">
           {t('bestStoreModalText2')}
          </span>
          <button className="flex items-center bg-orange px-8 py-5 rounded-80 text-white leading-none font-semibold mt-9">
           {t('bestStoreModalButton')}
            <img className="ml-[14px]" src="/svgs/link_icon.svg" alt="link icon" />
          </button>
        </div>
      </Modal>
    </div>
  )
}
