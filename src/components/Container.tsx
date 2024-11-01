import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  flex?: boolean;
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, flex, classes }) => {
  return (
    <div className={`mx-auto ${classes ? classes : ''} ${flex ? "flex" : ""} max-w-7xl`}>
      {children}
    </div>
  );
};

export default Container;
