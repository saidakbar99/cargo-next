import Image from 'next/image'

interface IconProps {
  icon: string;
}

export const IconWithBackground: React.FC<IconProps> = ({ icon }) => {
  return (
    <div className="min-w-[54px] h-[54px] bg-iconBackground rounded-full flex items-center justify-center">
      <Image width={24} height={24} src={icon} alt="Icon" />
    </div>
  );
};