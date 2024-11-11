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
            } w-[90%] md:max-w-screen-md lg:max-w-screen-lg`}
        >
            {children}
        </div>
    );
};

export default Container;
