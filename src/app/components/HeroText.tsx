import { Button } from "./ui/Button"
import { SocialMedias } from "./ui/SocialMedias"

export const HeroText = () => {
  return (
    <div className="lg:flex mt-[380px] lg:gap-[100px] lg:mt-[474px]">
      <h1 className="text-[32px] lg:text-6xl text-white font-bold font-roadRadio leading-[38px]">Из Турции к вам домой — просто и быстро!</h1>
      <div className="mt-4 lg:mt-0">
        <h3 className="text-white font-medium lg:text-xl">Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</h3>
        <div className="flex mt-[22px]">
          <Button variant="orange" className=" mr-8">Начать покупку</Button>
          <SocialMedias />
        </div>
      </div>
    </div>
  )
}