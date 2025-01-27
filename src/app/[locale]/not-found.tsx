import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing'

const NotFound = () => {
  const t = useTranslations();  
  return (
    <div className="text-center flex flex-col items-center">
      <img className="filter grayscale" src="/images/404.png" width={642} height={481} alt="404 image" />
      <h3 className="text-xl font-bold mt-6">{t('404NotFoundTitle')}</h3>
      <span className="text-gray-300 font-medium mt-3">{t('404NotFoundText')}</span>
      <Link href='/'>
        <button className="mt-6 bg-orange text-white px-5 py-3 rounded-80 font-bold w-[271px]">
         {t('404NotFoundButton')}
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
