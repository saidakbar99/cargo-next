import { SocialMedias } from "./ui/SocialMedias"

export const Footer = () => {
  return (
    <footer className="bg-black mt-[50px] lg:mt-[140px] lg:pt-16 lg:pb-12">
      <div className="mx-auto xl:w-[1216px] p-4 lg:py-8">
        <div className="hidden lg:flex mb-8">
          <div className="w-[320px] mr-16">
            <img className='mb-6' src='/svgs/cargo_white.svg' alt="Logo" />
            <span className='text-white font-medium'>Создавайте удивительные цифровые впечатления, которые делают мир более счастливым.</span>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">Товар</h2>
                <ul className="text-lightGray font-medium">
                  <li className="mb-4">Обзор</li>
                  <li className="mb-4">Функции</li>
                  <li className="mb-4">Решения</li>
                  <li className="mb-4">Учебники</li>
                  <li className="mb-4">Цены</li>
                  <li className="mb-4">Релизы</li>
                </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Ресурсы</h2>
                  <ul className="text-lightGray font-medium">
                    <li className="mb-4">Блог</li>
                    <li className="mb-4">Новостная</li>
                    <li className="mb-4">События</li>
                    <li className="mb-4">Справочный центр</li>
                    <li className="mb-4">Учебники</li>
                    <li className="mb-4">Поддерживать</li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Компания</h2>
                  <ul className="text-lightGray font-medium">
                    <li className="mb-4">О нас</li>
                    <li className="mb-4">Карьера</li>
                    <li className="mb-4">Press</li>
                    <li className="mb-4">Новости</li>
                    <li className="mb-4">Галерея</li>
                    <li className="mb-4">Контакт</li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Юридический</h2>
                  <ul className="text-lightGray font-medium">
                    <li className="mb-4">Условия</li>
                    <li className="mb-4">Конфиденциальность</li>
                    <li className="mb-4">Cookies</li>
                    <li className="mb-4">Лицензии</li>
                    <li className="mb-4">Настройки</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between lg:pt-12">
          <span className="text-white font-medium">© Все права защищены!</span>
          <SocialMedias />
        </div>
      </div>
    </footer>
  )
}