import { IconWithBackground } from "./ui/IconWithBackground";

export interface BenefitsItemProps {
  headerText: string;
  text: string;
  icon: string;
}

export const BenefitsItem: React.FC<BenefitsItemProps> = ({headerText, text, icon}) => {
  return (
    <div className='flex w-[364px] p-4'>
      <IconWithBackground icon={icon} />
      <div className="ml-[20px]">
        <h4 className='text-xl font-semibold'>{headerText}</h4>
        <span className='text-gray mt-2'>{text}</span>
      </div>
    </div>
  )
}