'use client'

import { IconWithBackground } from "./ui/IconWithBackground"
import { Button } from "./ui/Button"
import MyMap from "./MyMap"

export const ContactUs = () => {
  return (
    <div id="contactUs" className="mt-[18px] lg:mt-[108px]">
      <h2 className="font-roadRadio font-bold text-[32px] lg:text-[50px] text-center mb-9 lg:mb-12">связаться с нами</h2>
      <MyMap />
      <div className="mt-9 lg:mt-12 flex flex-col lg:flex-row">
        <div className="p-6 lg:p-12 bg-black lg:min-w-[464px] order-2 lg:order-none rounded-xl lg:rounded-e-none">
          <div className="py-4 flex">
            <IconWithBackground icon='/svgs/mail_icon.svg' />
            <div className="flex flex-col ml-5">
              <span className="mb-2 text-white text-xl font-semibold">Напишите нам</span>
              <span className="mb-[14px] text-lightGray font-medium">Наша дружная команда здесь, чтобы помочь.</span>
              <span className="text-orange font-medium">garantiexpresscargo@gmail.com</span>
            </div>
          </div>
          <div className="py-4 flex my-8">
            <IconWithBackground icon='/svgs/phone_icon.svg' />
            <div className="flex flex-col ml-5">
              <span className="mb-2 text-white text-xl font-semibold">Офис</span>
              <span className="mb-[14px] text-lightGray font-medium">Приходите поздороваться в наш офис HQ.</span>
              <span className="text-orange font-medium">Istanbul Kadıköy Rasimpaşa Mah Halıtağa caddesi No72 daıra : 2 Garanti Express </span>
            </div>
          </div>
          <div className="py-4 flex">
            <IconWithBackground icon='/svgs/geo_pin_icon.svg' />
            <div className="flex flex-col ml-5">
              <span className="mb-2 text-white text-xl font-semibold">Телефон</span>
              <span className="mb-[14px] text-lightGray font-medium">пн-пт с 8:00 до 17:00.</span>
              <span className="text-orange font-medium">Ahror: +90 530 086 77 77</span>
              <span className="text-orange font-medium">Ofis: +90 552 216 72 78</span>
              <span className="text-orange font-medium">Doniyur: +90 537 934 99 99</span>
              <span className="text-orange font-medium">Umide: +90 552 210 33 83</span>
            </div>
          </div>
        </div>
        <div className="p-6 lg:p-24 w-full order-1 lg:order-none border border-lightGray rounded-xl lg:rounded-s-none mb-9 lg:mb-0">
          <div className="flex flex-col mb-6">
            <label htmlFor="name" className="text-sm mb-1.5 font-semibold">
              Имя
            </label>
            <input
              id="name"
              type="text"
              className="border border-lightGray py-3 px-4 rounded-lg w-full"
              placeholder="Ваше имя"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="telephone" className="text-sm mb-1.5 font-semibold">
              Номер телефона
            </label>
            <input
              id="telephone"
              type="text"
              className="border border-lightGray py-3 px-4 rounded-lg w-full"
              placeholder="+998 99 989 88  99"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-sm mb-1.5 font-semibold">
              Сообщение
            </label>
            <textarea
              id="message"
              className="border border-lightGray py-3 px-4 rounded-lg w-full resize-none"
              rows={5}
            >
            </textarea>
          </div>
          <div className="flex mb-8">
            <input type="checkbox" className=" w-5 h-5 cursor-pointer accent-orange rounded-md" />
            <span className="text-gray ml-3">Вы соглашаетесь с политикой конфиденциальности.</span>
          </div>
          <Button className="w-full" variant="orange" text="Отправить сообщение" />
        </div>
      </div>
    </div>
  )
}