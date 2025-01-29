import { useTranslations } from "next-intl";
import { Calculator } from "./Calculator";

export const HomePageCalculator = () => {
  const t = useTranslations();
  return (
    <div id="calculator" className="mt-[50px] lg:mt-[140px]">
      <h2 className="font-roadRadio text-[32px] font-bold text-center lg:text-[50px] mb-16">
        {t('delivery_cost')}
      </h2>
      <Calculator placement={'homepage'} />
    </div>
  )
}