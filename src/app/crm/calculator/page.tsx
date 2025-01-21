'use client'

import { useState } from "react";
import CrmLayout from "@/components/CrmLayout";
import Dropdown from "@/components/ui/Dropdown";
import { weightOptions } from "../../../lib/utils";

const Calculator = () => {
  const [slider, setSlider] = useState(600);
  const [amount, setAmount] = useState('12')
  const [activeTab, setActiveTab] = useState('tab2');
  const min = 0;
  const max = 1000;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(event.target.value));
  };

  return (
    <CrmLayout activeMenu="calculator">
      <div className="pt-6 h-screen">
        <div className="p-10 bg-white w-[744px] mx-auto rounded-xl">
          <h3 className="text-2xl font-bold mb-9">Kalkulyator</h3>
          <div className="mb-9 flex justify-center">
            <div className="bg-[#F3F4F6] p-2 rounded-xl text-sm font-semibold">
              <button
                onClick={() => setActiveTab('tab1')}
                className={`px-5 py-2 rounded-lg w-[308px] mr-2 ${
                  activeTab === 'tab1' ? 'bg-white' : 'bg-transparent text-gray-300'
                }`}
              >
                Из Узбекистана в Турцию.
              </button>
              <button
                onClick={() => setActiveTab('tab2')}
                className={`px-5 py-2 rounded-lg w-[308px] ${
                  activeTab === 'tab2' ? 'bg-white' : 'bg-transparent text-gray-300'
                }`}
              >
                Из Турции в Узбекистан.
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[620px]">
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
          <div className="p-6 w-[460px] rounded-xl">
            <span className="font-medium">≈ 5-10 раб. дней</span>
            <h3 className="text-4xl font-roadRadio font-bold mt-[14px]">2 000 000 UZS</h3>
          </div>
        </div>
      </div>
    </CrmLayout>
  )
}

export default Calculator;
