"use client"

import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  classname?: string;
}

const LanguageDropdown: React.FC<DropdownProps> = ({ options, classname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative select-none  ${classname}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='font-semibold py-3 px-4 cursor-pointer flex justify-between items-center border border-lightGray rounded-80 '
      >
        <span className="mr-1.5 leading-none">{selectedOption}</span>
        <svg
          className={`w-4 h-4 transition-transform  ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <ul className='absolute z-10 mt-2 w-full rounded-lg shadow-md max-h-60 overflow-y-auto  bg-white'>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
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

export default LanguageDropdown;
