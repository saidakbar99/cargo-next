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
        return "bg-white/25 backdrop-blur-[21px] text-white py-[14px] px-6";
      case "orange":
        return "bg-orange text-xl text-white px-[30px] py-5";
      case "secondary":
        return "border border-orange text-orange px-[30px] py-5";
    }
  };

  const baseStyles = "rounded-[80px] text-center font-semibold items-center";
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