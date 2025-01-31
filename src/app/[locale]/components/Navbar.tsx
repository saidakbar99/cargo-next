"use client"

import { useState, useEffect } from 'react'
import { Button } from "./ui/Button"
import { scrollToSection } from '../../../lib/utils'
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { Link } from '../../../i18n/routing'

export const Navbar = () => {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(!!localStorage?.getItem("access_token"));

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    scrollToSection(id, 100)
    setIsMenuOpen(false)
  }

  return (
    <div
      className={`${
        isScrolled ? "bg-[#222529] shadow-md py-6" : "bg-transparent pt-9"
      } fixed top-0 w-full z-50 transition-colors duration-300 `}
    >
      <div className="flex justify-between h-[50px] items-center px-4 md:p-0 mx-auto w-full xl:w-[1140px]">
        <img
          className='w-[75px] lg:w-[85px] cursor-pointer'
          src='/svgs/cargo_white.svg'
          alt="Logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <div className="flex">
          <Link href={isSignedIn ? '/crm/shipments' : '/auth/sign-in'}>
            <Button className="mr-[5px] text-sm lg:text-base lg:mr-4 h-[50px]">{isSignedIn ? t('cabinet') :t('login')}</Button>
          </Link>
          <LocaleSwitcher variant='blurred' />
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Button className="ml-[5px] w-10 py-2 px-2.5 lg:w-[70px] lg:py-[12px] lg:px-6 lg:ml-4 h-[50px]">
              <img src='/svgs/burger.svg' alt="Burger Icon" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-[rgba(6,6,6,0.8)] backdrop-blur-sm flex flex-col justify-start items-center z-50"
          >
            <button
              className="absolute top-6 right-10 lg:top-10 text-white text-3xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="mt-20 lg:mt-32 text-center text-4xl font-semibold text-white">
              <li className="mb-7">
                <button onClick={() => handleScroll("aboutUs")}>{t('about')}</button>
              </li>
              <li className="mb-7">
                <button onClick={() => handleScroll("process")}>{t('proccess')}</button>
              </li>
              <li className="mb-7">
                <button onClick={() => handleScroll("benefits")}>{t('advantages')}</button>
              </li>
              <li className="mb-7">
                <button onClick={() => handleScroll("stores")}>{t('shops')}</button>
              </li>
              <li className="mb-7">
                <button onClick={() => handleScroll("calculator")}>{t('calculator')}</button>
              </li>
              <li className="mb-7">
                <button onClick={() => handleScroll("faq")}>{t('faq')}</button>
              </li>
              <li className="mb-7">
                <button onClick={() => handleScroll("contactUs")}>{t('contacts')}</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}