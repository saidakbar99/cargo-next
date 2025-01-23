import { Button } from "./ui/Button"
import { SocialMedias } from "./ui/SocialMedias"
import { useTranslations } from 'next-intl';

export const HeroText = () => {
  const t = useTranslations();
  return (
    <div className="lg:flex mt-[380px] lg:gap-[100px] lg:mt-[474px]">
      <h1 className="text-[32px] lg:text-6xl text-white font-bold font-roadRadio leading-[38px]">{t('herotitle')}</h1>
      <div className="mt-4 lg:mt-0">
        <h3 className="text-white font-medium lg:text-xl">{t('herotext')}</h3>
        <div className="flex mt-[22px]">
          <Button variant="orange" className=" mr-8">{t("herobutton")}</Button>
          <SocialMedias />
        </div>
      </div>
    </div>
  )
}