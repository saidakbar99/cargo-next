"use client"

import { useState } from 'react'
import { ShipmentStatuses } from "./ShipmentStatuses"
import { calculateTotalAmount, formatCurrency, formatDate } from '../../lib/utils'

// TODO: add interface
export const ShipmentCard: React.FC<any> = ({shipment}) => {
  const [isOpen, setIsOpen] = useState(false)

  const fields = [
    { label: "Qabul qilingan sa’na", value: formatDate(shipment.date) },
    { label: "Karobka soni", value: shipment.package_count },
    { label: "Vazni", value: `${shipment.weight} grams` },
    { label: "Turkiya manzil", value: shipment.turkeyAddress },
    { label: "O’zbekiston manzil", value: shipment.uzbekistanAddress },
    { label: "Qabul qiluvchi", value: shipment.clientName },
    { label: "Summa", value: formatCurrency(calculateTotalAmount(shipment.items)) },
  ];

  return (
    <div className="bg-white rounded-xl mt-6 p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-black text-xl font-bold">ID raqami {shipment?.id}</h3>
        <ShipmentStatuses activeStatus={shipment.status} />
      </div>
      {isOpen && (
        <>
          <div className="flex mt-6">
            <div className="flex flex-col text-gray-300">
              {fields.map((field, index) => (
                <span key={index} className="mt-4">
                  {field.label}:
                </span>
              ))}
            </div>
            <div className="flex flex-col ml-6 font-medium">
              {fields.map((field, index) => (
                <span key={index} className="mt-4">
                  {field.value}
                </span>
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <span className='font-bold'>Tovarlar</span>
            <div className='mt-4 grid grid-cols-3 gap-6'>
              {
              shipment.items.map((item:any) => (
                <div className='flex' key={item.id}>
                  <img src="/images/item_mock_image.png" alt="Item Image" className='w-[50px] h-[50px] object-contain shrink-0' />
                  <div className='ml-3 w-full'>
                    <span className='text-gray-300 text-sm'>{item.name}</span>
                    <div className='flex justify-between items-center'>
                      <span className='mt-2.5 text-xl font-bold'>{formatCurrency(item.item_amount)}</span>
                      <span className='mt-2.5 mr-8 text-sm font-medium'>{item.quantity} dona</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <div 
        className="mt-6 flex items-center bg-whiteBackground w-fit px-6 py-3 cursor-pointer select-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="text-black font-semibold mr-2">{isOpen ? "Yopish" : "Ko’proq ma’lumot ko’rish"}</button>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}