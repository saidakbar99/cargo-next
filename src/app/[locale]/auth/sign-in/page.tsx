'use client'

import { useState } from 'react'
import axios from 'axios';
import { useTranslations } from 'next-intl'
import { Link, useRouter } from '../../../../i18n/routing'
import AuthLayout from "@/components/AuthLayout"
import { SocialButton } from "@/components/ui/SocialButton"
import { toast } from 'react-toastify';

const SignIn = () => {
  const t = useTranslations()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}customer/auth/login`,
        { email, password }
      );

      localStorage.setItem('access_token', response.data.data.access_token);
      router.push('/crm/shipments');
    } catch (err) {
      console.log(err)
      toast.error(t('loginError'))
    }
  };

  return (
    <AuthLayout backgroundImage="/images/sign_in.png">
      <div className="px-8 lg:px-0 max-w-[400px] w-full">
        <h3 className="text-2xl lg:text-4xl font-bold lg:text-center mt-6 lg:mt-0">{t('signInPageEnter')}</h3>
        <h5 className="mt-2 text-gray-300 lg:text-center text-sm lg:text-base">{t('signInPageTitle')} </h5>
        <div className="flex flex-col mt-10 lg:mt-6">
          <label htmlFor="email" className="text-sm mb-1.5 font-semibold">
            {t('signInPageEmail')}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-lightGray py-3 px-[14px] rounded-lg max-w-[400px] text-sm"
            placeholder={t('signInPageEmailPlace')}
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="password" className="text-sm mb-1.5 font-semibold">
            {t('signInPagePassword')}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-lightGray py-3 px-4 rounded-lg max-w-[400px] text-sm"
            placeholder={t('signInPagePasswordPlace')}
          />
        </div>
        <span className="text-gray-300">
          {t('signInPageForgotPassword')}
          <Link href='/auth/recovery'>
            <span className="text-orange font-semibold"> {t('signInPageRestart')}</span>
          </Link>
        </span>
        {/* <Link href='/crm/shipments'> */}
          <button 
            className="rounded-80 text-center font-semibold items-center w-full px-5 py-3 bg-orange text-white mt-6"
            onClick={handleLogin}
          >
           {t('signInPageButton')}
          </button>
        {/* </Link> */}
        <SocialButton classname='mb-6' />
        <span className="text-center mt-6 text-gray-300">
          {t('signInPageRegister')}
          <Link href='/auth/sign-up'>
            <span className="text-orange font-bold"> {t('signInPageRegisterButton')}</span>
          </Link>
        </span>
      </div>
    </AuthLayout>
  )
}

export default SignIn