"use client"

import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  selectedValue: string;
  variant?: 'white' | 'blurred';
  classname?: string;
  onSelect: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, variant = 'white', classname, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getDropdownStyles = (variant: string) => {
    switch (variant) {
      case "blurred":
        return "bg-white/25 backdrop-blur-[21px] text-white py-2 px-3 py-[14px] px-6 rounded-80 mr-[5px]";
      case "white":
        return "border border-lightGray bg-white rounded-lg";
    }
  };

  const getOptionsStyles = (variant: string) => {
    switch (variant) {
      case "blurred":
        return "bg-white/25 backdrop-blur-[21px] text-gray-700 text-center w-2/3 left-4 font-semibold";
      case "white":
        return "border border-lightGray bg-white rounded-lg";
    }
  };

  const baseDropdownStyles = "font-semibold w-full py-3 px-4 cursor-pointer flex justify-between items-center"
  const variantDropdownStyles = getDropdownStyles(variant);

  const baseOptionsStyles = "absolute z-10 mt-2 w-full rounded-lg shadow-md max-h-60 overflow-y-auto"
  const variantOptionsStyles = getOptionsStyles(variant);

  return (
    <div className={`relative w-full select-none ${classname}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseDropdownStyles} ${variantDropdownStyles}`}
      >
        <span className="lg:mr-1.5">{selectedValue}</span>
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

      {isOpen && (
        <ul className={`${baseOptionsStyles} ${variantOptionsStyles}`}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
