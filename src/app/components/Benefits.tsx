import { BenefitsItem, BenefitsItemProps } from './BenefitsItem'
import BenefitsIcon1 from '../../../public/svgs/sun_icon.svg'
import BenefitsIcon2 from '../../../public/svgs/sunrise_icon.svg'
import BenefitsIcon3 from '../../../public/svgs/geo_pin_icon.svg'
import BenefitsIcon4 from '../../../public/svgs/bag_icon.svg'
import BenefitsIcon5 from '../../../public/svgs/thumb_up_icon.svg'
import BenefitsIcon6 from '../../../public/svgs/lock_icon.svg'

const benefitsContent = [
  {
    headerText: 'Инновационный сервис-центр',
    text: 'Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!',
    icon: BenefitsIcon1,
  },
  {
    headerText: 'Экспресс-склад',
    text: 'После поступления вашей посылки на наши склады в США и в Китай , уже в течение 24 часов посылка будет отправлена в Узбекистан.',
    icon: BenefitsIcon2,
  },
  {
    headerText: 'Быстрая доставка на дом по всему Узбекистану',
    text: 'Доставка по городу Ташкент - $2 Доставка по Узбекистану - $5',
    icon: BenefitsIcon3,
  },
  {
    headerText: 'Фактический вес',
    text: 'Вы всегда оплачиваете фактический вес, что существенно экономит ваши средства на доставку.',
    icon: BenefitsIcon4,
  },
  {
    headerText: '0% налога с продаж',
    text: 'CARGO предоставляет 0% налога с продаж. Наш склад находится на территории штата Дэлавэр, что позволяет Вам не переплачивать за налоги.',
    icon: BenefitsIcon5,
  },
  {
    headerText: 'Надежность',
    text: 'Прочные запорные устройства, на которые можно повесить до 4 замков.',
    icon: BenefitsIcon6,
  },
  {
    headerText: 'Bозможность возврата',
    text: 'Прочные запорные устройства, на которые можно повесить до 4 замков.',
    icon: BenefitsIcon6,
  },
]

export const Benefits = () => {
  return (
    <div id='benefits' className="mt-[140px] text-black">
      <h2 className="text-center font-roadRadio font-bold text-5xl mb-[48px]">наши преимущества</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-[29px]">
        {benefitsContent.map((item: BenefitsItemProps) => (
          <BenefitsItem key={item.headerText} {...item} />
        ))}
      </div>
    </div>
  )
}
