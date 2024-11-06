"use client";

import { Section } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { changeSlideHandler, Dir } from "@/utils/helpers/slide.helper";

const testimonial = [
  {
    src: "/testimonial/alex.jpeg",
    name: "Alex T",
    testimony: "This is the best solution in the world is the cool one i like",
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
    <Section classes="border-y border-y-primary-main py-10" id="testimonial">
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 items-center py-14 px-6 sm:px-12">
        {/* Left Section */}
        <div>
          <h3 className="text-center md:text-left text-3xl sm:text-5xl mb-8 sm:mb-10 leading-tight sm:leading-[60px] text-white">
            What are people saying?
          </h3>

          {/* Navigation Buttons */}
          <div className="flex gap-5 justify-center sm:justify-start">
            <button onClick={() => handleSlide(Dir.BACK)}>
              <Image
                alt=""
                src="/testimonial/left.png"
                className="h-[4rem] sm:h-[6.5rem] w-auto"
                height={500}
                width={500}
              />
            </button>

            <button onClick={() => handleSlide(Dir.FWD)}>
              <Image
                alt=""
                src="/testimonial/right.png"
                className="h-[4rem] sm:h-[6.5rem] w-auto"
                height={500}
                width={500}
              />
            </button>
          </div>
        </div>

        {/* Right Section (Testimonial) */}
        <div className="border text-center text-white rounded-xl border-primary-main flex flex-col items-center py-14 sm:py-20 justify-between h-[35vh] sm:h-[40vh] mt-6">
          <p className=" font-medium text-[.9rem] sm:text-xl w-[80%] sm:w-[60%] mx-auto mb-6 sm:mb-10">
            {testimonial[number].testimony}
          </p>

          <div className="flex gap-5 justify-center items-center">
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] border border-primary-main rounded-full overflow-hidden">
              <Image
                alt=""
                src={testimonial[number].src}
                className="h-full w-full"
                height={50}
                width={50}
              />
            </div>

            <span className="text-sm sm:text-md">
              {testimonial[number].name}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
