"use client"

import { useState } from 'react'
import Link from 'next/link';
import { Button } from "./ui/Button"
// import Dropdown from "./ui/Dropdown"
// import { languages, scrollToSection } from '../../lib/utils'
import { scrollToSection } from '../../lib/utils'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    scrollToSection(id, 50)
    setIsMenuOpen(false)
  }

  return (
    <div className="flex justify-between h-[50px] items-center">
      <img
        className='w-[75px] lg:w-[85px]'
        src='/svgs/cargo_white.svg'
        alt="Logo"
      />
      <div className="flex">
        <Link href='/auth/sign-in'>
          <Button className="mr-[5px] text-sm lg:text-base lg:mr-4">Авторизоваться</Button>
        </Link>
        {/* <Dropdown variant="blurred" options={languages} /> */}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Button className="ml-[5px] w-10 py-2 px-2.5 lg:w-[70px] lg:py-[12px] lg:px-6 lg:ml-4">
            <img src='/svgs/burger.svg' alt="Burger Icon" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[rgba(6,6,6,0.8)] backdrop-blur-sm flex flex-col justify-start items-center z-50"
        >
          <button
            className="absolute top-6 right-10 lg:top-12 lg:right-40 text-white text-3xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="mt-20 lg:mt-40 text-center text-4xl font-semibold text-white">
            <li className="mb-7">
              <button onClick={() => handleScroll("aboutUs")}>О нас</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("process")}>Процесс работы</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("benefits")}>Наши преимущества</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("stores")}>Лучшие магазины</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("calculator")}>Калькулятор</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("faq")}>Часто задаваемые вопросы</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("contactUs")}>Связаться с нами</button>
            </li>
          </ul>
        </div>
      )}
    </div>
    
  )
}