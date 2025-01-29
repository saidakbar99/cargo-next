'use client'

import CrmLayout from "@/components/CrmLayout";
import { useTranslations } from "next-intl";
import { Calculator } from "@/components/Calculator";

const CrmCalculator = () => {
  const t = useTranslations();
  return (
    <CrmLayout activeMenu="calculator">
      <div className="pt-6 h-screen">
        <div className="p-10 bg-white w-[744px] mx-auto rounded-xl">
          <h3 className="text-2xl font-bold mb-9">{t('crmCalcTitle')}</h3>
          <Calculator placement={'crm'} />
        </div>
      </div>
    </CrmLayout>
  )
}

export default CrmCalculator;
