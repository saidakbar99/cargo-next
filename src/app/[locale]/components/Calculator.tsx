"use client"

import { useState } from "react"
import Dropdown from "./ui/Dropdown";
import { FilterButton } from "./ui/FilterButton";
import { useTranslations } from "next-intl";

interface ICalculatorProps {
  placement: 'crm' | 'homepage';
}

const DELIVERY_RATES = {
  express: 8,
  standard: 4.5,
};

const WEIGHT_UNITS = {
  KG: 1,
  Tonna: 1000,
};

export const Calculator: React.FC<ICalculatorProps> = ({placement}) => {
  const t = useTranslations();
  const [slider, setSlider] = useState(600);
  const [weight, setWeight] = useState(12);
  const [weightType, setWeightType] = useState<"KG" | "Tonna">('KG');
  const [amount, setAmount] = useState(96);
  const [activeDeliveryType, setActiveDeliveryType] = useState<"express" | "standard">('express');
  const [activeTab, setActiveTab] = useState('tab_1');

  const calculateDeliveryAmount = (
    deliveryType: keyof typeof DELIVERY_RATES,
    weight: number,
    weightType: keyof typeof WEIGHT_UNITS
  ) => {
    const weightInKg = weight * WEIGHT_UNITS[weightType];
    setAmount(weightInKg * DELIVERY_RATES[deliveryType]);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setWeight(value);
    calculateDeliveryAmount(activeDeliveryType, value, weightType);
  };

  const handleDeliveryTypeChange = (deliveryType: keyof typeof DELIVERY_RATES) => {
    setActiveDeliveryType(deliveryType);
    calculateDeliveryAmount(deliveryType, weight, weightType);
  };

  const handleWeightTypeChange = (unit: keyof typeof WEIGHT_UNITS) => {
    setWeightType(unit);
    calculateDeliveryAmount(activeDeliveryType, weight, unit);
  };

  return (
    <>
      <div className="mt-9 flex justify-center">
        <div className={`bg-[#F3F4F6] p-2 rounded-xl font-medium text-xs lg:text-sm ${placement === 'crm' ? 'w-full' : ''}`}>
          {["tab_1", "tab_2"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 lg:px-5 py-2 rounded-lg w-[166px] lg:w-[308px] mr-1 lg:mr-2 ${activeTab === tab ? "bg-white" : "bg-transparent text-gray-300"}`}
            >
              {t(`delivery_${tab}`)}
            </button>
          ))}
        </div>
      </div>
      <div className={`hidden mt-8 lg:flex ${placement === 'homepage' ? 'justify-center' : ''}`}>
        {["express", "standard"].map((type) => (
          <div 
            key={type} 
            onClick={() => handleDeliveryTypeChange(type as keyof typeof DELIVERY_RATES)}
            className="mr-3"
          >
            <FilterButton variant={activeDeliveryType === type ? "active" : ""} text={t(type)} />
          </div>
        ))}
      </div>
      <div className={`mt-8 ${placement === 'homepage' ? 'lg:flex justify-between' : ''}`}>
        <div className="flex flex-col lg:w-[620px]">
          <div className="flex">
            <input 
              type="text"
              inputMode="numeric"
              value={weight} 
              className="border border-lightGray font-semibold rounded-lg w-full py-3 px-4 mr-6 focus:outline-none" 
              onChange={handleWeightChange}  
            />
            <Dropdown 
              options={["KG", "Tonna"]} 
              onSelect={(e) => handleWeightTypeChange(e as "KG" | "Tonna")}  
              selectedValue={weightType} 
            />
          </div>
          <div className="flex items-center justify-between mt-6 py-5">
            <input
              type="range"
              min={0}
              max={1000}
              value={slider}
              onChange={(e) => setSlider(Number(e.target.value))}
              className="w-full h-1 rounded-lg accent-orange cursor-pointer custom-slider"
            />
          </div>
        </div>
        <div className={`p-6 lg:w-[460px] rounded-xl ${placement === 'homepage' ? 'bg-[#F9F9F9]' : ''}`}>
        <span className="font-medium">{t(`${activeDeliveryType.toLowerCase()}_delivery_days`)}</span>
          <h3 className="text-[32px] leading-none lg:text-[40px] font-roadRadio font-bold mt-[14px]">{amount} $</h3>
        </div>
      </div>
    </>
  )
}