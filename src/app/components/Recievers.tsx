import { Button } from "./ui/Button"

export const Recievers = () => {
  return (
    <div className="mt-9">
      <div className="border rounded-xl p-6">
        <div className="flex justify-between">
          <span className="font-bold">Karim Salimov</span>
          <div className="flex">
            <button
              className='px-3 py-2 flex items-center rounded-[50px] bg-green-100 text-green mr-3'
            >
              <img src='/svgs/check_no_border.svg' alt='Check Icon' />
              <span className="text-xs font-semibold ml-2">Tanlangan</span>
            </button>
            <button
              className='px-3 py-2 flex items-center rounded-[50px] border border-lightGray'
            >
              <img src='/svgs/user_edit.svg' alt='User Edit Icon' />
              <span className="text-xs font-semibold ml-2">O’zgartirish</span>
            </button>
          </div>
        </div>
        <div className="mt-3 w-fit flex">
          <div className="flex flex-col text-gray-300 text-sm space-y-4">
            <span className="flex-1">Telefon raqam:</span>
            <span className="flex-1">Pasport:</span>
            <span className="flex-1">Manzil:</span>
          </div>
          <div className="flex flex-col ml-16 font-medium space-y-4">
            <span className="flex-1">+998990147463</span>
            <span className="flex-1">AB6745961</span>
            <span className="flex-1">Ahmad Donish 44A</span>
          </div>
        </div>
        <div className="flex justify-center mt-9">
          <button className="px-16 py-[14px] bg-orange text-white rounded-80 text-center font-bold items-center leading-none">
            Yangi qabul qiluvchi qo’shish
          </button>
        </div>
      </div>
    </div>
  )
}