"use client"

import { useState } from 'react'
import AuthLayout from "@/components/AuthLayout"
import { Button } from "@/components/ui/Button"
import { InputCode } from '@/components/ui/InputCode'

const Recovery = () => {
  const [isMailSent, setIsMailSent] = useState(false)
  return (
    <AuthLayout backgroundImage="/images/recovery.png">
      <div className="px-40">
        <h3 className="text-4xl text-black font-bold text-center">Parolni qayta tiklash</h3>
        <h5 className="mt-2 text-gray-300 text-center">Kerakli ma’lumotni kiriting</h5>
        {isMailSent ? (
          <div className='my-8'>
            <InputCode />
          </div>
        ) : (
          <div className="flex flex-col my-6">
            <label htmlFor="email" className="text-sm mb-1.5 text-black font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
              placeholder="Pochtangizni kiriting"
            />
          </div>
        )}
        <div onClick={() => setIsMailSent(true)}>
          <Button className="w-full px-5 py-2.5 text-base" variant="orange" text="Tasdiqlash" />
        </div>
        <p className='mt-8 text-gray-300 text-center'>Qayta jo’natish 00:20</p>
      </div>
    </AuthLayout>
  )
}

export default Recovery