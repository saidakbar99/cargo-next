"use client"

import { useState } from 'react'

interface AccordionProps {
  question: string;
  answer: string;
}

export const Accordion: React.FC<AccordionProps> = ({question, answer}) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div onClick={() => setIsOpened(!isOpened)} className='pb-8 pt-6 cursor-pointer'>
      <button type="button" className="flex items-top justify-between w-full mb-2">
        <span className='text-xl font-medium mr-6 text-left'>{question}</span>
        <img src={isOpened ? '/svgs/minus_icon.svg' : '/svgs/plus_icon.svg'} alt="icon" />
      </button>
      <div 
        className={`transition-all duration-200 overflow-hidden pr-6 transform ${
          isOpened ? 'max-h-[200px] translate-y-0 opacity-100' : 'max-h-0 -translate-y-4 opacity-0'
        }`}
      >
        <span className="text-gray text-[18px] font-medium">{answer}</span>
      </div>
    </div>
  )
}