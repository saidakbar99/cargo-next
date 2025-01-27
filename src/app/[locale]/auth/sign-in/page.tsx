import { Link } from '../../../../i18n/routing'
import AuthLayout from "@/components/AuthLayout"
import { SocialButton } from "@/components/ui/SocialButton"
import { useTranslations } from 'next-intl'


const SignIn = () => {
  const t = useTranslations()
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
        <Link href='/crm/shipments'>
          <button className="rounded-80 text-center font-semibold items-center w-full px-5 py-3 bg-orange text-white mt-6">
           {t('signInPageButton')}
          </button>
        </Link>
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