"use client";

import { Section } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { changeSlideHandler, Dir } from "@/utils/helpers/slide.helper";

const testimonial = [
    {
        src: "/testimonial/alex.jpeg",
        name: "Alex T",
        testimony:
            "“This is the best solution in the world is the cool one i like”",
    },
    {
        src: "/testimonial/micheal.jpeg",
        name: "Micheal",
        testimony:
            "“A must-have for any property owner looking to stay ahead of the curve” ",
    },
    {
        src: "/testimonial/sarah.jpeg",
        name: "Serah G.",
        testimony: "“Reliable and efficient, exactly what we need”  ",
    },
];

const Testimonial = () => {
    const [number, setImageNumber] = useState(0);

    const handleSlide = (dir: Dir) => {
        changeSlideHandler(dir, setImageNumber, testimonial);
    };

    return (
        <Section
            classes='border-y border-y-primary-main py-10'
            id='testimonial'
        >
            <div className='bg-black grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-[45%_50%] lg:grid-cols-[45%_50%] justify-between items-center py-14 px-6 md:px-10 lg:px-12'>
                {/* Left Section */}
                <div className=''>
                    <h3 className='text-center font-normal md:text-left md:text-[32px] lg:text-5xl mb-8 sm:mb-10 leading-tight md:leading-[50px] lg:leading-[60px] text-white'>
                        What are people saying?
                    </h3>

                    {/* Navigation Buttons */}
                    <div className='flex gap-5 justify-center sm:justify-start'>
                        <button onClick={() => handleSlide(Dir.BACK)}>
                            <Image
                                alt=''
                                src='/testimonial/left.png'
                                className='h-[4rem] sm:h-[6.5rem] w-auto'
                                height={500}
                                width={500}
                            />
                        </button>

                        <button onClick={() => handleSlide(Dir.FWD)}>
                            <Image
                                alt=''
                                src='/testimonial/right.png'
                                className='h-[4rem] sm:h-[6.5rem] w-auto'
                                height={500}
                                width={500}
                            />
                        </button>
                    </div>
                </div>

                {/* Right Section (Testimonial) */}
                <div className='border text-center text-white rounded-xl border-primary-main grid md:gap-2 lg:gap-14 grid-cols-1 grid-rows-2 items-center md:py-6 lg:py-20 justify-between h-[15rem] md:h-[19rem] mt-5 sm:mt-0 '>
                    <p className=' text-[14px] md:text-[16px] mx-auto leading-6 w-[80%] md:w-[80%] lg:w-[70%] mt-9'>
                        {testimonial[number].testimony}
                    </p>

                    <div className='grid grid-cols-[20%_25%] justify-center place-items-center mt-[-50px] md:mt-0'>
                        <div className='w-[40px] sm:w-[50px] ml-[-10px] h-[40px] sm:h-[50px] border border-primary-main rounded-full overflow-hidden'>
                            <Image
                                alt=''
                                src={testimonial[number].src}
                                className='h-full w-full justify-self-end'
                                height={50}
                                width={50}
                            />
                        </div>

                        <span className='text-sm lg:text-[16px] border '>
                            {testimonial[number].name}
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Testimonial;
