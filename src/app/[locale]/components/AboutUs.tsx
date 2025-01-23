import { Button } from "./ui/Button"
import Image from 'next/image'
import AboutUsImage from '../../../../public/images/about_us_image.png'

export const AboutUs = () => {
  return (
    <div id="aboutUs" className="mt-[110px] lg:mt-[264px]">
      <div className="lg:flex lg:justify-between">
        <h2 className="text-[32px] lg:text-5xl font-bold font-roadRadio">О НАС</h2>
        <div className="lg:w-[500px]">
          <h3 className="font-medium mt-6 lg:mt-0 lg:text-xl">Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</h3>
          <Button variant="secondary" className="mt-6">Узнать больше</Button>
        </div>
      </div>
      <Image className="my-9 lg:my-[70px]" src={AboutUsImage} alt="About us Image" />
      <div className="lg:flex lg:justify-between">
        <div className="py-4 px-6 lg:py-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-roadRadio">10,580,996</h3>
          <span className="text-xl font-medium mt-3 lg:mt-[18px]">Отправленных посылок</span>
        </div>
        <div className="py-4 px-6 mt-6 lg:mt-0 lg:py-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-roadRadio">1,143,634</h3>
          <span className="text-xl font-medium mt-3 lg:mt-[18px]">Зарегистрированных покупателей</span>
        </div>
        <div className="py-4 px-6 mt-6 lg:mt-0 lg:py-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-roadRadio">300,000+</h3>
          <span className="text-xl font-medium mt-3 lg:mt-[18px]">Подписчиков в соц. сетях</span>
        </div>
      </div>
    </div>
  )
}