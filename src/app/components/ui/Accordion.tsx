"use client"

import { useState } from 'react'
import Image from 'next/image'
import PlusIcon from '../../../../public/svgs/plus-icon.svg'
import MinusIcon from '../../../../public/svgs/minus_icon.svg'

interface AccordionProps {
  question: string;
  answer: string;
}

export const Accordion: React.FC<AccordionProps> = ({question, answer}) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div onClick={() => setIsOpened(!isOpened)} className='pb-8 pt-6 cursor-pointer'>
      <button type="button" className="flex items-center justify-between w-full mb-2">
        <span className='text-xl font-medium'>{question}</span>
        <Image src={isOpened ? MinusIcon : PlusIcon} alt="icon" />
      </button>
      <div 
        className={`transition-all duration-200 overflow-hidden transform ${
          isOpened ? 'max-h-[200px] translate-y-0 opacity-100' : 'max-h-0 -translate-y-4 opacity-0'
        }`}
      >
        <span className="text-gray text-[18px] font-medium">{answer}</span>
      </div>
    </div>
  )
}