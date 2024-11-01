import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const HeaderGreen: React.FC<SectionProps> = ({ children }) => {
  return <span className="text-primary-main px-2">{children}</span>;
};
export default HeaderGreen;
