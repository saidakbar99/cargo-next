"use client"

import {useState} from "react"
import Dropdown from "./ui/Dropdown";
import {FilterButton} from "./ui/FilterButton";
import {useTranslations} from "next-intl";

interface ICalculatorProps {
  placement: 'crm' | 'homepage';
}

const DIRECTIONS = {
  tr_uzb: 'Turkiyadan O‘zbekistonga',
  uzb_tr: 'O‘zbekistondan Turkiyaga',
}

type DeliveryRate = {
  standard: number;
  express: number | null;
};

const DELIVERY_RATES: Record<keyof typeof DIRECTIONS, DeliveryRate> = {
  tr_uzb: {
    standard: 4.5,
    express: 10,
  },
  uzb_tr: {
    standard: 5,
    express: null,
  },
};

type DELIVERY_TYPES = 'standard' | 'express';

type Direction = keyof typeof DIRECTIONS;
type DeliveryRateKey = keyof DeliveryRate;

const getDeliveryTypes = (direction: Direction): DeliveryRateKey[] =>
  Object.keys(DELIVERY_RATES[direction]) as DeliveryRateKey[];

const WEIGHT_UNITS = {
  KG: 1,
  Tonna: 1000,
};

export const Calculator: React.FC<ICalculatorProps> = ({placement}) => {
  const t = useTranslations();
  const [slider, setSlider] = useState(600);
  const [weight, setWeight] = useState(10);
  const [weightType, setWeightType] = useState<"KG" | "Tonna">('KG');
  const [amount, setAmount] = useState(45);
  const [activeDeliveryType, setActiveDeliveryType] = useState<DELIVERY_TYPES>('standard');
  const [activeDirection, setActiveDirection] = useState<"tr_uzb" | "uzb_tr">('tr_uzb');

  const calculateDeliveryAmount = (
    deliveryType: DELIVERY_TYPES,
    weight: number,
    weightType: keyof typeof WEIGHT_UNITS,
    direction: keyof typeof DIRECTIONS
  ) => {
    const weightInKg = weight * WEIGHT_UNITS[weightType];
    let rate = 0; // Fallback to 0 if deliveryType doesn't exist
    const rates = DELIVERY_RATES[direction];
    if (rates && rates[deliveryType]) {
      rate = rates[deliveryType];
    }
    setAmount(weightInKg * rate);
  };

  const handleDirectionChange = (direction: keyof typeof DIRECTIONS) => {
    setActiveDirection(direction);
    let deliveryType = activeDeliveryType;
    if (DELIVERY_RATES[direction][activeDeliveryType] === null) {
      deliveryType = 'standard';
      setActiveDeliveryType(deliveryType);
    }
    calculateDeliveryAmount(deliveryType, weight, weightType, direction);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setWeight(value);
    calculateDeliveryAmount(activeDeliveryType, value, weightType, activeDirection);
  };

  const handleDeliveryTypeChange = (deliveryType: DELIVERY_TYPES) => {
    setActiveDeliveryType(deliveryType);
    calculateDeliveryAmount(deliveryType, weight, weightType, activeDirection);
  };

  const handleWeightTypeChange = (unit: keyof typeof WEIGHT_UNITS) => {
    setWeightType(unit);
    calculateDeliveryAmount(activeDeliveryType, weight, unit, activeDirection);
  };

  return (
    <>
      <div className="mt-9 flex justify-center">
        <div
          className={`bg-[#F3F4F6] p-2 rounded-xl font-medium text-xs lg:text-sm ${placement === 'crm' ? 'w-full' : ''}`}>
          {Object.keys(DIRECTIONS).map((direction) => (
            <button
              key={direction}
              onClick={() => handleDirectionChange(direction as keyof typeof DIRECTIONS)}
              className={`px-2 lg:px-5 py-2 rounded-lg w-[166px] lg:w-[308px] mr-1 lg:mr-2 ${activeDirection === direction ? "bg-white" : "bg-transparent text-gray-300"}`}
            >
              {t(`delivery_${direction}`)}
            </button>
          ))}
        </div>
      </div>
      <div className={`hidden mt-8 lg:flex ${placement === 'homepage' ? 'justify-center' : ''}`}>
        {getDeliveryTypes(activeDirection)
          .filter(type => DELIVERY_RATES[activeDirection][type] !== null)
          .map((type) => (
            <div
              key={type}
              onClick={() => handleDeliveryTypeChange(type as DELIVERY_TYPES)}
              className="mr-3"
            >
              <FilterButton variant={activeDeliveryType === type ? "active" : ""} text={t(type)}/>
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