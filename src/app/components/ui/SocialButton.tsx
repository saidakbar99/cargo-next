import Image from 'next/image';
import GoogleIcon from '../../../../public/svgs/google_icon.svg'

interface ButtonProps {
  handleClick?: () => void;
}

export const SocialButton: React.FC<ButtonProps> = ({
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className='rounded-3xl w-full text-center font-semibold items-center border border- 
        flex justify-center px-5 py-2.5 mt-2'
    >
      <img src={GoogleIcon} width={20} height={20} alt='Google Icon' />
      <span className='ml-2 text-black'>Google orqali kirish</span>
    </button>
  )
}