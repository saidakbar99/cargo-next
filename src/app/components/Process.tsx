import Image from 'next/image'
import ProcessIcon1 from '../../../public/svgs/checked_user_icon.svg'
import ProcessIcon2 from '../../../public/svgs/truck_icon.svg'
import ProcessIcon3 from '../../../public/svgs/box_icon.svg'

export const Process = () => {
  return ( 
    <div id='process' className='text-center mt-[140px] text-black'>
      <h2 className='text-5xl font-bold font-roadRadio'>Процесс работы</h2>
      <div className='flex mt-24'>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <Image width={100} height={100} src={ProcessIcon1} alt="ProcessIcon1" />
          <span className='font-semibold text-xl mt-8'>Зарегистрируйтесь и получите свой адрес доставки в Turkiye.</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <Image className='w-[100px] h-[100px]' src={ProcessIcon2} alt="ProcessIcon2" />
          <span className='font-semibold text-xl mt-8'>Покупайте онлайн и используйте свои адрес доставки</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <Image width={100} height={100} src={ProcessIcon3} alt="ProcessIcon3" />
          <span className='font-semibold text-xl mt-8'>Получите свою посылку в течение 5-10 рабочих дней</span>
        </div>
      </div>
    </div>
  )
}