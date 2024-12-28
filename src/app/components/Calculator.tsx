"use client"

import { useState } from "react"
import Dropdown from "./ui/Dropdown";

const weightOptions = ['KG', 'Lb', 'grams']

export const Calculator = () => {
  const [slider, setSlider] = useState(600);
  const [amount, setAmount] = useState('12')
  const min = 0;
  const max = 1000;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(event.target.value));
  };

  return (
    <div id="calculator" className="mt-[140px] text-black">
      <h2 className="font-roadRadio text-5xl font-bold text-center">Стоимость доставки</h2>
      <div className="mt-16 flex justify-between">
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
        <div className="p-6 w-[460px] bg-[#F9F9F9] rounded-xl">
          <span className="font-medium">≈ 5-10 раб. дней</span>
          <h3 className="text-4xl font-roadRadio font-bold mt-[14px]">2 000 000 UZS</h3>
        </div>
      </div>
    </div>
  )
}