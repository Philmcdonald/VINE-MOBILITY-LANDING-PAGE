import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Heading: React.FC<SectionProps> = ({ children }) => {
  return (
    <h1 className="mb-5 tracking-wide text-[2rem] md:text-[3rem] leading-[40px] md:leading-[55px]">
      {children}
    </h1>
  );
};
export default Heading;
