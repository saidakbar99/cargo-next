'use client';

import { useParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import { usePathname, useRouter } from '../../../i18n/routing';

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    params.locale === 'uz' ? 'Uz' : 'Ру' 
  );
  
  const handleSelect = (option: string, label: string) => {
    setSelectedOption(label);
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: option}
      );
    });
  };

  return (
    <div className='relative w-full select-none'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='font-semibold w-full cursor-pointer flex justify-between items-center
          bg-white/25 backdrop-blur-[21px] text-white py-2 px-3 lg:py-[14px] lg:px-6 rounded-80 mr-[5px]'
      >
        <span className="lg:mr-1.5">{selectedOption}</span>
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

      {isOpen && !isPending && (
        <ul className='absolute z-10 mt-2 rounded-lg shadow-md max-h-60 overflow-y-auto 
          marker:bg-white/25 backdrop-blur-[21px] text-gray-700 text-center w-2/3 left-4 font-semibold'>
            <li
              onClick={() => handleSelect('ru', 'Ру')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Ру
            </li>
            <li
              onClick={() => handleSelect('uz', 'Uz')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Uz
            </li>
        </ul>
      )}
    </div>
  );
}

export default LocaleSwitcher;