import { IconWithBackground } from "./ui/IconWithBackground";
import { useTranslations } from 'next-intl';

export interface BenefitsItemProps {
  icon: string;
  index: number;
}

export const BenefitsItem: React.FC<BenefitsItemProps> = ({icon, index}) => {
  const t = useTranslations();
  return (
    <div className='flex w-[364px] p-4'>
      <IconWithBackground icon={icon} />
      <div className="ml-[20px]">
        <h4 className='text-xl font-semibold mb-2'>{t('advanttext' + index)}</h4>
        <span className='text-gray'>{t('advantdescr' + index)}</span>
      </div>
    </div>
  )
}