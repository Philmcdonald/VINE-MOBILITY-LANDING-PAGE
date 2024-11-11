import React, { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
}

const Heading: React.FC<SectionProps> = ({ children }) => {
    return <h1 className='mb-4 md:mb-3 lg:mb-5 tracking-wide'>{children}</h1>;
};
export default Heading;
