interface ButtonProps {
  handleClick?: () => void;
  classname?: string;
}

export const SocialButton: React.FC<ButtonProps> = ({
  handleClick,
  classname = '',
}) => {
  return (
    <button
      onClick={handleClick}
      className={`rounded-3xl w-full text-center font-semibold items-center border border- 
        flex justify-center px-5 py-2.5 mt-2 ${classname}`}
    >
      <img src='/svgs/google_icon.svg' width={20} height={20} alt='Google Icon' />
      <span className='ml-2'>Google orqali kirish</span>
    </button>
  )
}