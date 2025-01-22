import { BenefitsItem, BenefitsItemProps } from './BenefitsItem'

const benefitsContent = [
  {
    headerText: 'Инновационный сервис-центр',
    text: 'Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!',
    icon: '/svgs/sun_icon.svg',
  },
  {
    headerText: 'Экспресс-склад',
    text: 'После поступления вашей посылки на наши склады в США и в Китай , уже в течение 24 часов посылка будет отправлена в Узбекистан.',
    icon: '/svgs/sunrise_icon.svg',
  },
  {
    headerText: 'Быстрая доставка на дом по всему Узбекистану',
    text: 'Доставка по городу Ташкент - $2 Доставка по Узбекистану - $5',
    icon: '/svgs/geo_pin_icon.svg',
  },
  {
    headerText: 'Фактический вес',
    text: 'Вы всегда оплачиваете фактический вес, что существенно экономит ваши средства на доставку.',
    icon: '/svgs/bag_icon.svg',
  },
  {
    headerText: '0% налога с продаж',
    text: 'CARGO предоставляет 0% налога с продаж. Наш склад находится на территории штата Дэлавэр, что позволяет Вам не переплачивать за налоги.',
    icon: '/svgs/thumb_up_icon.svg',
  },
  {
    headerText: 'Надежность',
    text: 'Прочные запорные устройства, на которые можно повесить до 4 замков.',
    icon: '/svgs/lock_icon.svg',
  },
  {
    headerText: 'Bозможность возврата',
    text: 'Прочные запорные устройства, на которые можно повесить до 4 замков.',
    icon: '/svgs/lock_icon.svg',
  },
]

export const Benefits = () => {
  return (
    <div id='benefits' className="mt-[50px] lg:mt-[140px]">
      <h2 className="text-center font-roadRadio font-bold text-[32px] lg:text-5xl mb-9 lg:mb-12">наши преимущества</h2>
      <div className="flex flex-col gap-y-6 lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-[29px]">
        {benefitsContent.map((item: BenefitsItemProps) => (
          <BenefitsItem key={item.headerText} {...item} />
        ))}
      </div>
    </div>
  )
}
