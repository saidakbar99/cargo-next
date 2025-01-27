import { useTranslations } from "next-intl"

export const PersonalSettings = () => {
  const t = useTranslations()
  return (
    <form className="grid grid-cols-2 gap-x-3 gap-y-6 mt-9">
      <div className="col-span-1">
        <label htmlFor="name" className="block text-sm font-medium">
         {t('personalSettingsName')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="surname" className="block text-sm font-medium">
          {t('personalSettingsSurname')}
        </label>
        <input
          id="surname"
          name="surname"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="date" className="block text-sm font-medium">
         {t('personalSettingsAge')}
        </label>
        <input
          id="date"
          name="date"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="sex" className="block text-sm font-medium">
         {t('personalSettingsGender')}
        </label>
        <input
          id="sex"
          name="sex"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="telephone" className="block text-sm font-medium">
          {t('personalSettingsPhone')}
        </label>
        <input
          id="telephone"
          name="telephone"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="email" className="block text-sm font-medium">
         {t('personalSettingsEmail')}
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <button 
        className='px-5 py-2 bg-orange rounded-80 text-white font-bold mt-3'
      >
     {t('personalSettingsSave')}
      </button>
    </form>
  )
}