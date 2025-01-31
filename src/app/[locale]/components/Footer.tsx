import { useTranslations } from "next-intl";
import { SocialMedias } from "./ui/SocialMedias"

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="bg-black mt-[50px] lg:mt-[140px] lg:pt-16 lg:pb-12">
      <div className="mx-auto xl:w-[1216px] p-4 lg:py-8">
        <div className="hidden lg:flex mb-8">
          <div className="w-[320px] mr-16">
            <img className='mb-6' src='/svgs/cargo_white.svg' alt="Logo" />
            <span className='text-white font-medium'>{t('footertitle')}</span>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">{t('footerlist')}</h2>
                <ul className="text-lightGray font-medium">
                  <li className="mb-4">{t('footerlink')}</li>
                  <li className="mb-4">{t('footerlink2')}</li>
                  <li className="mb-4">{t('footerlink3')}</li>
                  <li className="mb-4">{t('footerlink4')}</li>
                  <li className="mb-4">{t('footerlink5')}</li>
                  <li className="mb-4">{t('footerlink6')}</li>
                </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">{t('footerlist2')}</h2>
                  <ul className="text-lightGray font-medium">
                    <li className="mb-4">{t('footerlink7')}</li>
                    <li className="mb-4">{t('footerlink8')}</li>
                    <li className="mb-4">{t('footerlink9')}</li>
                    <li className="mb-4">{t('footerlink10')}</li>
                    <li className="mb-4">{t('footerlink11')}</li>
                    <li className="mb-4">{t('footerlink12')}</li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">{t('footerlist3')}</h2>
                  <ul className="text-lightGray font-medium">
                    <li className="mb-4">{t('footerlink13')}</li>
                    <li className="mb-4">{t('footerlink14')}</li>
                    <li className="mb-4">{t('footerlink15')}</li>
                    <li className="mb-4">{t('footerlink16')}</li>
                    <li className="mb-4">{t('footerlink17')}</li>
                    <li className="mb-4">{t('footerlink18')}</li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">{t('footerlist4')}</h2>
                  <ul className="text-lightGray font-medium">
                    <li className="mb-4">{t('footerlink19')}</li>
                    <li className="mb-4">{t('footerlink20')}</li>
                    <li className="mb-4">{t('footerlink21')}</li>
                    <li className="mb-4">{t('footerlink22')}</li>
                    <li className="mb-4">{t('settings')}</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between lg:pt-12">
          <span className="text-white font-medium">{t("footer")}</span>
          <SocialMedias />
        </div>
      </div>
    </footer>
  )
}