

import { useTranslations } from "next-intl"
import Dropdown from "./ui/Dropdown"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";

interface IProfileData {
  full_name: string;
  email: string;
  phone: string;
  passport: string;
  birth_date: string;
  gender: number;
}

export const PersonalSettings = () => {
  const t = useTranslations()
  const [profileData, setProfileData] = useState<IProfileData>({
    full_name: '',
    email: '',
    phone: '',
    passport: '',
    birth_date: '',
    gender: 1,
  })

  const genderOptions = [t('gender.male'), t('gender.female')];
  const genderDisplay = profileData.gender === 1 ? t('gender.male') : t('gender.female');

  const handleChange = (e: any) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleGenderChange = (selected: string) => {
    setProfileData((prev) => ({
      ...prev,
      gender: selected === t('gender.male') ? 1 : 2,
    }));
  };

  const fetchProfile = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}customer/profile`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data)
    } catch (error) {
      console.log(error)
      toast.error('Profile fetch failed')
    }
  }

  const updateProfile = async () => {
    const token = localStorage.getItem("access_token");
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}customer/profile`, profileData,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      toast.success('Profile updated successfully')
    } catch (error) {
      console.log(error)
      toast.error('Profile update failed')
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [])

  return (
    <div className="grid grid-cols-12 gap-x-3 gap-y-6 mt-9">
      <div className="col-span-9">
        <label htmlFor="full_name" className="block text-sm font-medium">
         {t('personalSettingsName')}
        </label>
        <input
          id="full_name"
          name="full_name"
          value={profileData.full_name}
          onChange={handleChange}
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-3">
        <label htmlFor="gender" className="block text-sm font-medium">
         {t('personalSettingsGender')}
        </label>
        <Dropdown 
          options={genderOptions}
          selectedValue={genderDisplay}
          classname="h-fit" 
          variant="white"
          onSelect={handleGenderChange}
        />
      </div>

      <div className="col-span-6">
        <label className="block text-sm font-medium">
          Pasport raqami
        </label>
        <input
          type="text"
          name="passport"
          value={profileData.passport}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="birth_date" className="block text-sm font-medium">
         {t('personalSettingsAge')}
        </label>
        <input
          id="birth_date"
          name="birth_date"
          value={profileData.birth_date}
          onChange={handleChange}
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      
      <div className="col-span-6">
        <label htmlFor="phone" className="block text-sm font-medium">
          {t('personalSettingsPhone')}
        </label>
        <input
          id="phone"
          name="phone"
          value={profileData.phone}
          onChange={handleChange}
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="email" className="block text-sm font-medium">
         {t('personalSettingsEmail')}
        </label>
        <input
          id="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <button
        onClick={updateProfile} 
        className='col-span-6 px-5 py-2 bg-orange rounded-80 text-white font-bold mt-3'
      >
     {t('personalSettingsSave')}
      </button>
    </div>
  )
}