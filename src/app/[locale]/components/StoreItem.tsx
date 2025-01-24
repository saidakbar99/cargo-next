import { useTranslations } from "next-intl";

export interface StoreItemProps {
  id: number;
  storeName: string;
  description: string;
  icon: string;
}

export const StoreItem: React.FC<StoreItemProps> = ({storeName, description, icon}) => {
  const t = useTranslations();
  return (
    <div className="border border-grayBorder rounded-xl p-6 mb-4 lg:flex">
      <div className='bg-storeLogoBg rounded-md flex justify-center items-center w-[60px] h-[60px] lg:mr-6 lg:min-w-[120px] lg:min-h-[120px] '>
        <img className="w-[38px] h-[13px] lg:w-[76px] lg:h-[26px]" src={icon} alt="Store Logo" />
      </div>
      <div className="mt-4 lg:mt-0">
        <h4 className="text-xl font-bold mb-3">{storeName}</h4>
        <span>{t('storedescr')}</span>
      </div>
    </div>
  )
}