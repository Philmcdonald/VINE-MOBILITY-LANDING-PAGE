"use client";

export enum ButtonType {
  clear = "clear",
  green = "green",
}

interface ButtonProps {
  type?: ButtonType;
  text: string;
  width?: string;
  textSize?: string;
  fn: () => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  width,
  textSize,
  fn,
  loading,
}) => {
  return (
    <button
      onClick={() => {
        fn();
      }}
      className={`mx-auto md:mx-0 py-[12px] md:py-[16px] font-semibold rounded-lg 
      ${textSize ? textSize : "text-[14px] md:text-[16px]"} 
      ${width ? width : "px-12"}  
  
      ${
        type === ButtonType.green
          ? "bg-primary-main text-white"
          : "text-primary-main border-2 border-primary-main"
      }
  
      sm:text-[14px] lg:text-[18px]
    `}
    >
      {loading ? "loading..." : text}
    </button>
  );
};

export default Button;
