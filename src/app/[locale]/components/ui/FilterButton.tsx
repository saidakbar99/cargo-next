interface ButtonProps {
  variant?: "active" | "";
  text: string;
  className?: string;
  handleClick?: () => void;
}

export const FilterButton: React.FC<ButtonProps> = ({
  variant = "",
  className = "",
  handleClick,
  text,
}) => {
  const baseStyles = "rounded-80 text-center font-semibold items-center text-[0.875em] px-[1em] py-[0.75em] border border-grayBorder leading-none max-[450px]:py-[0.9em]";
  const activeStyles = "bg-black text-white";

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variant && activeStyles} ${className}`}
    >
      {text}
    </button>
  )
}