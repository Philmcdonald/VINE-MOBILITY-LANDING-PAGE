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
            className={`mx-auto md:mx-0 py-[10px] md:py-[12px] font-medium rounded-md
      ${textSize ? textSize : "text-[10px] md:text-[12px] lg:text-[14px]"} 
      ${width ? width : "px-12"}  
  
      ${
          type === ButtonType.green
              ? "bg-primary-main text-white"
              : "text-primary-main border-2 border-primary-main"
      }
    `}
        >
            {loading ? "loading..." : text}
        </button>
    );
};

export default Button;
