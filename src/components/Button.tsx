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
}

const Button: React.FC<ButtonProps> = ({ type, text, width, textSize, fn }) => {
  return (
    <button
      onClick={() => {
        fn();
      }}
      className={`py-[16px] font-semibold rounded-lg ${
        textSize ? textSize : "text-[16px]"
      } ${width ? width : "px-14"}  
      
      ${
        type === ButtonType.green
          ? "bg-primary-main text-white"
          : "text-primary-main border-2 border-primary-main"
      }
      
      `}
    >
      {text}
    </button>
  );
};

export default Button;
