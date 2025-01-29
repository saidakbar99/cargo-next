"use client"

import { useState } from 'react'
import { ShipmentStatuses } from "./ShipmentStatuses"
import { formatDate, trimTrailingZeros } from '../../../lib/utils'
import { IShipment } from '../crm/shipments/page'
import Table from './ui/Table'

export const ShipmentCard: React.FC<IShipment> = ({
  boxes_quantity,
  date_prepared,
  goods,
  id,
  payment_tr,
  payment_uz,
  receiver_address,
  receiver_name,
  sender_address,
  status,
  weight
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const fields = [
    { label: "Qabul qilingan sa’na", value: formatDate(date_prepared) },
    { label: "Karobka soni", value: boxes_quantity },
    { label: "Vazni", value: `${trimTrailingZeros(weight)} kg` },
    { label: "Turkiya manzil", value: sender_address },
    { label: "O’zbekiston manzil", value: receiver_address },
    { label: "Qabul qiluvchi", value: receiver_name },
    // { label: "Summa", value: formatCurrency(calculateTotalAmount(items)) },
    { label: "Turkiyada to'lov", value: payment_tr ? trimTrailingZeros(payment_tr) + ' $' : '' },
    { label: "O'zbeksitonda to'lov", value: payment_uz  ? trimTrailingZeros(payment_uz) + ' $' : '' },
  ];

  return (
    <div className="bg-white rounded-xl mt-6 p-4 lg:p-6">
      <div className="flex justify-between items-center flex-wrap">
        <h3 className="text-black text-xl font-bold">ID raqami {id}</h3>
        <ShipmentStatuses activeStatus={status} />
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
          {/* <div className="flex flex-col md:flex-row mt-6">
            <div className="flex flex-col text-gray-300 w-full md:w-auto">
              {fields.map((field, index) => (
                <div key={index} className="mt-4 flex flex-col md:flex-row">
                  <span className="md:w-1/2">{field.label}:</span>
                  <span className="md:w-1/2 ml-2">{field.value}</span>
                </div>
              ))}
            </div>
          </div> */}
          <div className='hidden lg:block mt-6'>
            <span className='font-bold'>Tovarlar</span>
            <div className='mt-4 grid grid-cols-3 gap-6'>
              <Table data={goods} />
              {/* {goods.map((good: IShipmentGood) => (
                <div className='flex' key={good.goods_name + good.quantity}>
                  <div className='w-full'>
                    <span className='text-gray-300 text-sm'>{good.goods_name}</span>
                    <div className='flex items-center'>
                      <span className='mt-2.5 ml-8 text-sm font-medium'>{good.quantity} dona</span>
                    </div>
                  </div>
                </div>
              ))} */}
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