"use client"

import { useState } from "react"
import Dropdown from "./ui/Dropdown";
import { FilterButton } from "./ui/FilterButton";
import { useTranslations } from "next-intl";

interface ICalculatorProps {
  placement: 'crm' | 'homepage';
}

export const Calculator: React.FC<ICalculatorProps> = ({placement}) => {
  const t = useTranslations();
  const [slider, setSlider] = useState(600);
  const [weight, setWeight] = useState(12);
  const [weightType, setWeightType] = useState('KG');
  const [amount, setAmount] = useState(96);
  const [activeDeliveryType, setActiveDeliveryType] = useState('Express');
  const [activeTab, setActiveTab] = useState('tab1');
  const min = 0;
  const max = 1000;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(event.target.value));
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setWeight(Number(value));
    calculateDeliveryAmount(activeDeliveryType, Number(value), weightType);
  }

  const handleDeliveryTypeChange = (deliveryType: string) => {
    setActiveDeliveryType(deliveryType)
    calculateDeliveryAmount(deliveryType, weight, weightType);
  }

  const handleWeightTypeChange = (e: string) => {
    setWeightType(e)
    calculateDeliveryAmount(activeDeliveryType, weight, e);
  }

  const calculateDeliveryAmount = (deliveryType: string, weight: number, weightType: string) => {
    const weightInKg = weightType === 'KG' ? weight : weight * 1000;
    if (deliveryType === 'Express') {
      setAmount(weightInKg * 8);
    } else {
      setAmount(weightInKg * 4.5);
    }
  }

  return (
    <>
      <div className="mt-9 flex justify-center">
        <div className={`bg-[#F3F4F6] p-2 rounded-xl font-medium text-xs lg:text-sm ${placement === 'crm' ? 'w-full' : ''}`}>
          <button
            onClick={() => setActiveTab('tab1')}
            className={`px-2 lg:px-5 py-2 rounded-lg w-[166px] lg:w-[308px] mr-1 lg:mr-2 ${
              activeTab === 'tab1' ? 'bg-white' : 'bg-transparent text-gray-300'
            }`}
          >
            {t('delivery_tab_1')}
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            className={`px-2 lg:px-5 py-2 rounded-lg w-[166px] lg:w-[308px] ${
              activeTab === 'tab2' ? 'bg-white' : 'bg-transparent text-gray-300'
            }`}
          >
            {t('delivery_tab_2')}
          </button>
        </div>
      </div>
      <div className={`hidden mt-8 lg:flex ${placement === 'homepage' ? 'justify-center' : ''}`}>
        <div onClick={() => handleDeliveryTypeChange('Express')} className="mr-3">
          <FilterButton 
            variant={activeDeliveryType === 'Express' ? 'active' : ''}
            text={t('express')}
          />
        </div>
        <div onClick={() => handleDeliveryTypeChange('Standart')}>
          <FilterButton 
            variant={activeDeliveryType === 'Standart' ? 'active' : ''}
            text={t('regular')}
          />
        </div>
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
              onSelect={(e) => handleWeightTypeChange(e)} 
              selectedValue={weightType} 
            />
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
        <div className={`p-6 lg:w-[460px] rounded-xl ${placement === 'homepage' ? 'bg-[#F9F9F9]' : ''}`}>
          <span className="font-medium">
            {t(activeDeliveryType === 'Express' ? 'express_delivery_days' : 'standart_delivery_days')}
          </span>
          <h3 className="text-[32px] leading-none lg:text-[40px] font-roadRadio font-bold mt-[14px]">{amount} $</h3>
        </div>
      </div>
    </>
  )
}