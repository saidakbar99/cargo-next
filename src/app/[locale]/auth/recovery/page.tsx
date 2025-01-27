"use client"

import { useState } from 'react'
import AuthLayout from "@/components/AuthLayout"
// import { Button } from "@/components/ui/Button"
import { InputCode } from '@/components/ui/InputCode'
import { useTranslations } from 'next-intl'

const Recovery = () => {
  const [isMailSent, setIsMailSent] = useState(false)
  const t = useTranslations()
  return (
    <AuthLayout backgroundImage="/images/recovery.png">
      <div className="px-8 lg:px-0 max-w-[400px] w-full">
        <h3 className="text-2xl lg:text-4xl font-bold lg:text-center mt-6 lg:mt-0">{t('recoveryPageTitle')}</h3>
        <h5 className="mt-2 text-gray-300 lg:text-center">{t('recoveryPageText')}</h5>
        {isMailSent ? (
          <div className='my-8'>
            <InputCode />
          </div>
        ) : (
          <div className="flex flex-col my-6">
            <label htmlFor="email" className="text-sm mb-1.5 font-semibold">
             {t('recoveryPageEmail')}
            </label>
            <input
              id="email"
              type="email"
              className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
              placeholder={t('recoveryPageEmailPlace')}
            />
          </div>
        )}
        <div onClick={() => setIsMailSent(true)}>
          <button className="w-full rounded-80 bg-orange px-5 py-[14px] leading-none text-white font-bold mb-8">
            {t('recoveryPageButton')}
          </button>
        </div>
        {isMailSent && <p className='text-gray-300 text-center'>{t('recoveryPageAlert')}</p>}
      </div>
    </AuthLayout>
  )
}

export default Recovery;