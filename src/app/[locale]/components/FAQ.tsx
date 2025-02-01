import { Accordion } from "./ui/Accordion"
import { useTranslations } from "next-intl";

export const FAQ = () => {
  const t = useTranslations();
  return (
    <div id="faq" className="mt-[50px] lg:mt-[140px]">
      <h2 className="font-roadRadio text-[32px] lg:text-[50px] font-bold text-center">{t('faq')}</h2>
      <div className="lg:w-[768px] mx-auto mt-10 divide-y">
        {[...Array(6)].map((_, index) => (
          <Accordion key={index} id={index} />
        ))}
      </div>
    </div>
  )
}