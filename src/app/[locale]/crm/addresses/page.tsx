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
        <div className="p-10 bg-white w-[744px] mx-auto rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Sizning Turkiyadagi manzilingiz</h3>
          <span className=" ">Bu manzilni Turkiya magazinlaridan onlayn xarid qilish jarayonida kiriting</span>
          <div className="flex justify-between my-10">
            <div className="flex flex-col text-gray-300 whitespace-nowrap">
              <span className="mt-4 flex-1">Qabul qiluvchi</span>
              <span className="mt-4 flex-1">Manzil</span>
              <span className="mt-4 flex-1">Viloyat</span>
              <span className="mt-4 flex-1">Shahar</span>
              <span className="mt-4 flex-1">Zip code</span>
              <span className="mt-4 flex-1">Davlat</span>
              <span className="mt-4 flex-1">Mobil raqam</span>
            </div>
            <div className="flex">
              <div className="flex flex-col ml-6 font-medium">
                <span className="mt-4 flex-1">Hasan Karimov</span>
                <span className="mt-4 flex-1 flex-wrap">UNALAN MAH. LIBADIYE CAD. NO:80 G BLOK, USKUDAR</span>
                <span className="mt-4 flex-1">Uskudar</span>
                <span className="mt-4 flex-1">Istanbul</span>
                <span className="mt-4 flex-1">2442</span>
                <span className="mt-4 flex-1">Turkiya</span>
                <span className="mt-4 flex-1">+90 216 285 1111</span>
              </div>
              <div className="flex flex-col ml-6 font-medium">
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
                <img className="mt-4 flex-1 cursor-pointer" src="/svgs/copy.svg" alt="Copy Icon" />
              </div>
            </div>
          </div>
          <span className="font-bold">Yetkazib berish vaqti - 9:00 - 18:00 Dush. - Jum.</span>
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
