interface ButtonProps {
  variant?: "orange" | "blurred" | "secondary";
  text?: string;
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "blurred",
  className = "",
  children,
  handleClick,
  text,
}) => {
  const getButtonStyles = (variant: string) => {
    switch (variant) {
      case "blurred":
        return "bg-white/25 backdrop-blur-[21px] text-white py-2 px-3 md:py-[14px] md:px-6";
      case "orange":
        return "bg-orange text-xl text-white px-6 py-4 border border-orange lg:px-[30px] lg:py-5 hover:bg-white hover:text-orange hover:border-orange";
      case "secondary":
        return "border border-orange text-orange px-6 py-4 lg:px-[30px] lg:py-5 hover:bg-orange hover:text-white";
    }
  };

  const baseStyles = "rounded-80 text-center font-semibold items-center leading-none text-nowrap";
  const variantStyles = getButtonStyles(variant);

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {text || children}
    </button>
  )
}