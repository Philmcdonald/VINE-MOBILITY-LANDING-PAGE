import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  flex?: boolean;
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, flex, classes }) => {
  return (
    <div
      className={`mx-auto ${classes ? classes : ""} ${
        flex ? "flex" : ""
      } w-[95%] max-w-[1120px] `}
    >
      {children}
    </div>
  );
};

export default Container;
