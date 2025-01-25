import { Accordion } from "./ui/Accordion"
import { useTranslations } from "next-intl";

export interface FaqProps {
  id: number;
}

const FAQContent = [
  {
    id: 1,
    question: 'Доступна ли бесплатная пробная версия?',
    answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.',
  },
  {
    id: 2,
    question: 'Могу ли я изменить свой план позже?',
    answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.',
  },
  {
    id: 3,
    question: 'Каковы ваши правила отмены?',
    answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.',
  },
  {
    id: 4,
    question: 'Можно ли добавить в счет-фактуру другую информацию?',
    answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.',
  },
  {
    id: 5,
    question: 'Как работает биллинг?',
    answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.',
  },
  {
    id: 6,
    question: 'Как изменить адрес электронной почты моей учетной записи?',
    answer: 'Да, вы можете попробовать нас бесплатно в течение 30 дней. Если вы хотите, мы предоставим вам бесплатный персонализированный 30-минутный вводный звонок, чтобы помочь вам начать работу как можно скорее.',
  },
]

export const FAQ = () => {
  const t = useTranslations();
  return (
    <div id="faq" className="mt-[50px] lg:mt-[140px]">
      <h2 className="font-roadRadio text-[32px] lg:text-[50px] font-bold text-center">{t('faq')}</h2>
      <div className="lg:w-[768px] mx-auto mt-10 divide-y">
        {FAQContent.map((item: FaqProps) => (
          <Accordion key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  )
}