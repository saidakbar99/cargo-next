import { Button } from "./ui/Button"
import Image from 'next/image'
import AboutUsImage from '../../../../public/images/about_us_image.png'
import { useTranslations } from "next-intl";

export const AboutUs = () => {
  const t = useTranslations();
  return (
    <div id="aboutUs" className="mt-[110px] lg:mt-[264px]">
      <div className="lg:flex lg:justify-between">
        <h2 className="text-[32px] lg:text-5xl font-bold font-roadRadio">{t('abouttitle')}</h2>
        <div className="lg:w-[500px]">
          <h3 className="font-medium mt-6 lg:mt-0 lg:text-xl">{t('abouttext')}</h3>
          <Button variant="secondary" className="mt-6">{t('aboutbutton')}</Button>
        </div>
      </div>
      <Image className="my-9 lg:my-[70px]" src={AboutUsImage} alt="About us Image" />
      <div className="lg:flex lg:justify-between">
        <div className="py-4 px-6 lg:py-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-roadRadio">10,580,996</h3>
          <span className="text-xl font-medium mt-3 lg:mt-[18px]">{t('aboutparcels')}</span>
        </div>
        <div className="py-4 px-6 mt-6 lg:mt-0 lg:py-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-roadRadio">1,143,634</h3>
          <span className="text-xl font-medium mt-3 lg:mt-[18px]">{t('aboutclients')}</span>
        </div>
        <div className="py-4 px-6 mt-6 lg:mt-0 lg:py-6">
          <h3 className="text-4xl lg:text-5xl font-bold font-roadRadio">300,000+</h3>
          <span className="text-xl font-medium mt-3 lg:mt-[18px]">{t('aboutsocials')}</span>
        </div>
      </div>
    </div>
  )
}