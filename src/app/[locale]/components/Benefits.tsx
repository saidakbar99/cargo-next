import { useTranslations } from 'next-intl';
import { BenefitsItem, BenefitsItemProps } from './BenefitsItem'

const benefitsContent = [
  {
    headerText: 'Инновационный сервис-центр',
    text: '{t("advantdescr")}',
    icon: '/svgs/sun_icon.svg',
    index: 0,
  },
  {
    headerText: '{t("advanttext2")}',
    text: '{t("advantdescr2")}',
    icon: '/svgs/sunrise_icon.svg',
    index: 1,
  },
  {
    headerText: '{t("advanttext3")}',
    text: '{t("advantdescr3")}',
    icon: '/svgs/geo_pin_icon.svg',
    index: 2,
  },
  {
    headerText: '{t("advanttext4")}',
    text: '{t("advantdescr4")}',
    icon: '/svgs/bag_icon.svg',
    index: 3,
  },
  {
    headerText: '{t("advanttext5")}',
    text: '{t("advantdescr5")}',
    icon: '/svgs/thumb_up_icon.svg',
    index: 4,
  },
  {
    headerText: '{t("advanttext6")}',
    text: '{t("advantdescr6")}',
    icon: '/svgs/lock_icon.svg',
    index: 5,
  },
  {
    headerText: '{t("advanttext7")}',
    text: '{t("advantdescr7")}',
    icon: '/svgs/lock_icon.svg',
    index: 6,
  },
]

export const Benefits = () => {
  const t = useTranslations();
  return (
    <div id='benefits' className="mt-[50px] lg:mt-[140px]">
      <h2 className="text-center font-roadRadio font-bold text-[32px] lg:text-5xl mb-9 lg:mb-12">{t('advanttitle')}</h2>
      <div className="flex flex-col gap-y-6 lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-[29px]">
        {benefitsContent.map((item: BenefitsItemProps) => (
          <BenefitsItem key={item.index} {...item} />
        ))}
      </div>
    </div>
  )
}
