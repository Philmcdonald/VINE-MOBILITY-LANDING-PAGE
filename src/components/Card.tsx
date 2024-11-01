import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Card: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="rounded-2xl bg-primary-main py-14 px-5 flex justify-center items-center flex-col gap-3">
      {children}
    </div>
  );
};
export default Card;
