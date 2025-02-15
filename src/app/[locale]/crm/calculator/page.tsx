'use client'

import CrmLayout from "@/components/CrmLayout";
import { useTranslations } from "next-intl";
import { Calculator } from "@/components/Calculator";

const CrmCalculator = () => {
  const t = useTranslations();
  return (
    <CrmLayout activeMenu="calculator">
      <div className="pt-6 w-[96%] mx-auto !h-full">
        <div className="p-10 bg-white w-[744px] mx-auto rounded-xl max-md:w-full max-[500px]:p-4">
          <h3 className="text-2xl font-bold mb-9">{t('crmCalcTitle')}</h3>
          <Calculator placement={'crm'} />
        </div>
      </div>
    </CrmLayout>
  )
}

export default CrmCalculator;
