import { Button } from "./ui/Button"

export const Banner = () => {
  return (
    <div className="mx-auto w-[1140px]">
      <div className='flex flex-col text-white w-[620px]'>
        <div className="mb-[30px]">
          <h3 className="text-white text-5xl font-bold font-roadRadio">2 недели бесплатного хранения</h3>
          <span className="font-medium text-2xl mt-2.5">при аренде от 3-х месяцев</span>
        </div>
        <Button variant="orange" text="Подобрать склад"/>
      </div>
    </div>
  )
}