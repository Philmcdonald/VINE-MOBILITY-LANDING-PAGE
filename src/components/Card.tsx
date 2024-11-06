import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Card: React.FC<SectionProps> = ({ children }) => {
  return (
    <div
      className="rounded-2xl bg-primary-main py-14 px-5 flex justify-center items-center flex-col gap-3 

    sm:py-10 sm:px-4 md:py-12 md:px-6 lg:py-14 lg:px-8
  "
    >
      {children}
    </div>
  );
};
export default Card;
