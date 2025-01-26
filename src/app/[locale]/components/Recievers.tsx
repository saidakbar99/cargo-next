import { useState } from "react"
import { Modal } from "./ui/Modal"

export const Recievers = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="mt-9">
        <div className="border rounded-xl p-6">
          <div className="flex justify-between">
            <span className="font-bold">Karim Salimov</span>
            <div className="flex">
              <button className='px-3 py-2 flex items-center rounded-[50px] bg-green-100 text-green mr-3'>
                <img src='/svgs/check_no_border.svg' alt='Check Icon' />
                <span className="text-xs font-semibold ml-2">Tanlangan</span>
              </button>
              <button className='px-3 py-2 flex items-center rounded-[50px] border border-lightGray'>
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
        </div>
        <div className="flex justify-center mt-9">
          <button 
            className="px-16 py-[14px] bg-orange text-white rounded-80 text-center font-bold items-center leading-none"
            onClick={() => setShowModal(true)}
          >
            Yangi qabul qiluvchi qo’shish
          </button>
        </div>
      </div>
      <Modal title="Yangi Qabul Qiluvchi Qo’shish" isOpen={showModal} onClose={() => setShowModal(false)}>
        <form className="grid grid-cols-2 gap-3 gap-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Ism</label>
            <input
              type="text"
              value='Karim'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Familiya</label>
            <input
              type="text"
              value='Salimov'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pasport raqami</label>
            <input
              type="text"
              value='AB 5765731'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">PINFL</label>
            <input
              type="text"
              placeholder="PINFL"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefon raqami</label>
            <input
              type="text"
              value='+998 98 465 44 77'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Viloyat</label>
            <select className="w-full border rounded-lg p-2 text-sm">
              <option>Viloyatni tanlash</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Shahar</label>
            <select className="w-full border rounded-lg p-2 text-sm">
              <option>Shaharni tanlash</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Manzil</label>
            <input
              type="text"
              placeholder="Manzilni kiriting"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
        </form>
        <div className="flex justify-between mt-8">
          <button
            className="px-5 py-3 border border-lightGray rounded-80 w-full leading-none font-bold mr-6"
            onClick={() => setShowModal(false)}
          >
            Bekor qilish
          </button>
          <button className="bg-orange px-5 py-3 rounded-80 text-white leading-none w-full font-bold">
            Saqlash
          </button>
        </div>
      </Modal>
    </>
  )
}