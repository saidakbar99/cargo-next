"use client"

import { useState } from "react"
import Dropdown from "./ui/Dropdown";
import { weightOptions } from "../../../lib/utils";
import { FilterButton } from "./ui/FilterButton";

export const Calculator = () => {
  const [slider, setSlider] = useState(600);
  const [amount, setAmount] = useState('12')
  const [activeType, setActiveType] = useState('Express');
  const [activeTab, setActiveTab] = useState('tab2');
  const min = 0;
  const max = 1000;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(event.target.value));
  };

  return (
    <div id="calculator" className="mt-[50px] lg:mt-[140px]">
      <h2 className="font-roadRadio text-[32px] font-bold text-center lg:text-[50px]">Стоимость доставки</h2>
      <div className="mt-9 flex justify-center lg:mt-16">
        <div className="bg-[#F3F4F6] p-2 rounded-xl font-medium text-xs lg:text-sm ">
          <button
            onClick={() => setActiveTab('tab1')}
            className={`px-2 lg:px-5 py-2 rounded-lg w-[166px] lg:w-[308px] mr-1 lg:mr-2 ${
              activeTab === 'tab1' ? 'bg-white' : 'bg-transparent text-gray-300'
            }`}
          >
            Из Узбекистана в Турцию.
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            className={`px-2 lg:px-5 py-2 rounded-lg w-[166px] lg:w-[308px] ${
              activeTab === 'tab2' ? 'bg-white' : 'bg-transparent text-gray-300'
            }`}
          >
            Из Турции в Узбекистан.
          </button>
        </div>
      </div>
      <div className="hidden lg:flex justify-center mt-8">
        <div onClick={() => setActiveType('Express')} className="mr-3">
          <FilterButton 
            variant={activeType === 'Express' ? 'active' : ''}
            text='Express'
          />
        </div>
        <div onClick={() => setActiveType('Odatiy')}>
          <FilterButton 
            variant={activeType === 'Odatiy' ? 'active' : ''}
            text='Odatiy'
          />
        </div>
      </div>
      <div className="mt-8 lg:flex justify-between">
        <div className="flex flex-col lg:w-[620px]">
          <div className="flex">
            <input 
              type="number"
              value={amount} 
              className="border border-lightGray font-semibold rounded-lg w-full py-3 px-4 mr-6 focus:outline-none" 
              onChange={(e) => setAmount(e.target.value)}  
            />
            <Dropdown options={weightOptions} />
          </div>
          <div className="flex items-center justify-between mt-6 py-5">
            <input
              type="range"
              min={min}
              max={max}
              value={slider}
              onChange={handleChange}
              className="w-full h-1 rounded-lg accent-orange cursor-pointer custom-slider"
            />
          </div>
        </div>
        <div className="p-6 lg:w-[460px] bg-[#F9F9F9] rounded-xl">
          <span className="font-medium">≈ 5-10 раб. дней</span>
          <h3 className="text-[32px] lg:text-[40px] font-roadRadio font-bold mt-[14px]">2 000 000 UZS</h3>
        </div>
      </div>
    </div>
  )
}