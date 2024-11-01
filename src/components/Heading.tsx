import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Heading: React.FC<SectionProps> = ({ children }) => {
  return (
    <h1 className="mb-5 tracking-wide text-[55px] leading-[66px]">
      {children}
    </h1>
  );
};
export default Heading;
