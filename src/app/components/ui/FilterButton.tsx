interface ButtonProps {
  variant?: "active" | "";
  text: string;
  className?: string;
  handleClick?: () => void;
}

const buttonText = {
  all: 'Barcha jo’natmalar',
  active: 'Faol',
  archived: 'Yetkazib berilganlar'
}

export const FilterButton: React.FC<ButtonProps> = ({
  variant = "",
  className = "",
  handleClick,
  text,
}) => {
  const baseStyles = "rounded-80 text-center font-semibold items-center text-sm px-4 py-3 border border-grayBorder";
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