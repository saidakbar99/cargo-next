export const Process = () => {
  return ( 
    <div id='process' className='text-center mt-[140px]'>
      <h2 className='text-5xl font-bold font-roadRadio'>Процесс работы</h2>
      <div className='flex mt-24'>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img width={100} height={100} src='/svgs/checked_user_icon.svg' alt="ProcessIcon1" />
          <span className='font-semibold text-xl mt-8'>Зарегистрируйтесь и получите свой адрес доставки в Turkiye.</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px]' src='/svgs/truck_time_icon.svg' alt="ProcessIcon2" />
          <span className='font-semibold text-xl mt-8'>Покупайте онлайн и используйте свои адрес доставки</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img width={100} height={100} src='/svgs/box_icon.svg' alt="ProcessIcon3" />
          <span className='font-semibold text-xl mt-8'>Получите свою посылку в течение 5-10 рабочих дней</span>
        </div>
      </div>
    </div>
  )
}