import { useTranslations } from "next-intl";

interface NoDataProps {
  pageName: string;
} 
const t = useTranslations()

const NoData: React.FC<NoDataProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-20 h-20 bg-white rounded-2xl flex justify-center items-center">
        <img src="/svgs/empty_archive.svg" alt="Empty Icon" />
      </div>
      <span className="mt-8 text-lg font-semibold text-center max-w-[287px]">
        {t('404title')} {pageName} {t('404text')}
      </span>
    </div>
  )
}

export default NoData