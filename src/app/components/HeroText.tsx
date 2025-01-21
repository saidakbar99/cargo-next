import { Button } from "./ui/Button"
import { SocialMedias } from "./ui/SocialMedias"

export const HeroText = () => {
  return (
    <div className="flex gap-[100px] mt-[474px]">
      <h1 className="text-6xl text-white font-bold font-roadRadio">Из Турции к вам домой — просто и быстро!</h1>
      <div className="">
        <h3 className="text-xl text-white">Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</h3>
        <div className="flex mt-[22px]">
          <Button variant="orange" className=" mr-8">Начать покупку</Button>
          <SocialMedias />
        </div>
      </div>
    </div>
  )
}