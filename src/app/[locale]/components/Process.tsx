import { useTranslations } from "next-intl";

export const Process = () => {
   const t = useTranslations();
  return ( 
    <div id='process' className='text-center mt-[50px] lg:mt-[140px]'>
      <h2 className='text-[32px] lg:text-5xl font-bold font-roadRadio'>{t('processtitle')}</h2>
      <div className='lg:flex mt-9 lg:mt-12'>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img width={100} height={100} src='/svgs/checked_user_icon.svg' alt="ProcessIcon1" />
          <span className='font-semibold text-xl mt-8'>{t('processregister')}</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px] mt-6 lg:mt-0'>
          <img className='w-[100px] h-[100px]' src='/svgs/truck_time_icon.svg' alt="ProcessIcon2" />
          <span className='font-semibold text-xl mt-8'>{t('processbuy')}</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px] mt-6 lg:mt-0'>
          <img width={100} height={100} src='/svgs/box_icon.svg' alt="ProcessIcon3" />
          <span className='font-semibold text-xl mt-8'>{t('processsend')}</span>
        </div>
      </div>
    </div>
  )
}