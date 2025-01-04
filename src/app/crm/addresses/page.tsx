import CrmLayout from "@/components/CrmLayout";
import NoData from "@/components/NoData";

const Addresses = () => {
  const isEmpty = false

  if (isEmpty) {
    return <NoData pageName="manzillar" />
  }
  return (
    <CrmLayout activeMenu='addresses'>
      <div className="pt-6 h-screen">
        <div className="p-10 bg-white w-[744px] mx-auto text-black">
          <h3 className="text-2xl font-bold mb-6">Sizning Turkiyadagi manzilingiz</h3>
          <span className=" ">Bu manzilni Turkiya magazinlaridan onlayn xarid qilish jarayonida kiriting</span>
          <div className="flex mt-6">
            <div className="flex flex-col text-gray-300">
              <span className="mt-4">Qabul qiluvchi</span>
              <span className="mt-4">Manzil</span>
              <span className="mt-4">Viloyat</span>
              <span className="mt-4">Shahar</span>
              <span className="mt-4">Zip code</span>
              <span className="mt-4">Davlat</span>
              <span className="mt-4">Mobil raqam</span>
            </div>
            <div className="flex flex-col ml-6 text-black font-medium">
              <span className="mt-4"></span>
            </div>
          </div>
        </div>
        <div className="w-[744px] mx-auto mt-6 flex">
          <div className="rounded-xl bg-white px-[55px] h-24 flex items-center">
            <button className="text-orange font-bold text-center w-[250px]">Bu manzildan qanday foydalanish kerak?</button>
          </div>
          <div className="rounded-xl bg-white ml-6 px-[55px] h-24 flex items-center">
            <button className="text-orange font-bold text-center w-[250px]">Taqiqlangan tovarlar ro’yxati</button>
          </div>
        </div>
      </div>
    </CrmLayout>
  )
}

export default Addresses;
