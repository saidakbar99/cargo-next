"use client"

import { useState } from 'react';
import { StoreItem, StoreItemProps } from "./StoreItem"
import { Pagination } from "./ui/Pagination"

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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id='stores' className="mt-[140px]">
      <h2 className="text-5xl font-bold text-center font-roadRadio">Лучшие магазины</h2>
      <div className="mt-[48px] flex">
        <div className="mr-6 border border-grayBorder rounded-xl p-6 flex flex-col w-[364px] h-fit">
          <span className="font-medium text-xl">Категории</span>
          <span className="mt-4 font-semibold">Все магазины</span>
          {categories.map((category: {name:string}, index: number) => (
            <span key={index} className="mt-4 opacity-60 cursor-pointer">{category.name}</span>
          ))}
        </div>
        <div>
          {stores.map((store: StoreItemProps) => (
            <StoreItem key={store.id} {...store} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}