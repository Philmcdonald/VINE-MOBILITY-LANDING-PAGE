import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
    children: ReactNode;
    image: string;
}

const Card: React.FC<SectionProps> = ({ children, image }) => {
    return (
        <div
            //     className="rounded-2xl bg-primary-main py-14 px-5 flex justify-center items-center flex-col gap-3
            //   sm:py-10 sm:px-4 md:py-12 md:px-6 lg:py-14 lg:px-8
            // "
            className='projects__card shadow-sm h-[18rem] md:h-[13rem] lg:h-[16rem]'
        >
            <Image
                src={image}
                width={400}
                height={400}
                alt='projects image'
                className='projects__img'
            />

            <div className='absolute inset-0 bg-black bg-opacity-50 z-10' />

            <div className='projects__modal'>{children}</div>
        </div>
    );
};
export default Card;
