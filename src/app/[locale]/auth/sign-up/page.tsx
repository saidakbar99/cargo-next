// import Link from "next/link"
import { Link } from '../../../../i18n/routing'
import AuthLayout from "@/components/AuthLayout"
import { SocialButton } from "@/components/ui/SocialButton"
import { useTranslations } from 'next-intl'

const SignUp = () => {
  const t = useTranslations()
  return (
    <AuthLayout backgroundImage="/images/sign_up.png">
      <div className="px-8 lg:px-0 max-w-[400px] w-full">
        <h3 className="text-2xl lg:text-4xl font-bold lg:text-center mt-6 lg:mt-0">{t('signUpPageEnter')}</h3>
        <h5 className="mt-2 text-gray-300 lg:text-center text-sm lg:text-base">{t('signUpPageTitle')}</h5>
        <div className="flex flex-col mt-10 lg:mt-6">
          <label htmlFor="email" className="text-sm mb-1.5 font-semibold">
            {t('signUpPageEmail')}
          </label>
          <input
            id="email"
            type="email"
            className="border border-lightGray py-3 px-[14px] rounded-lg max-w-[400px] text-sm"
            placeholder={t('signUpPageEmailPlace')}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="telephone" className="text-sm mb-1.5 font-semibold">
           {t('signUpPagePhone')}
          </label>
          <input
            id="telephone"
            type="tel"
            className="border border-lightGray py-3 px-[14px] rounded-lg max-w-[400px] text-sm"
            placeholder={t('signUpPagePhonePlace')}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-sm mb-1.5 font-semibold">
            {t('signUpPagePassword')}
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-[14px] rounded-lg max-w-[400px] text-sm"
            placeholder={t('signUpPagePasswordPlace')}
          />
        </div>
        <span className="text-gray-300 text-xs text-left mt-2">{t('signUpPagePasswordPlace2')}</span>
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-sm mb-1.5 font-semibold">
            {t('signUpPagePasswordRe')}
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-[14px] rounded-lg max-w-[400px] text-sm"
            placeholder={t('signUpPagePasswordRePlace')}
          />
        </div>
        <button className="rounded-80 text-center font-semibold items-center w-full px-5 py-3 mt-6 bg-orange text-white">
          {t('signUpPageButton')}
        </button>
        <SocialButton classname='mb-6' />
        <span className="text-center mt-6 text-gray-300">
        {t('signUpPageReg')}
          <Link href='/auth/sign-in'>
            <span className="text-orange font-bold"> {t('signUpPageRegButton')}</span>
          </Link>
        </span>
      </div>
    </AuthLayout>
  )
}

export default SignUp