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
      <div className="bg-black grid grid-cols-[40%_52%] items-center py-14 px-12">
        <div>
          <h3 className="text-5xl mb-10 leading-[60px] text-white">
            What are people saying?
          </h3>

          <div className="flex gap-5">
            <button onClick={() => handleSlide(Dir.FWD)}>
              <Image
                alt=""
                src="/testimonial/left.png"
                className=" h-[6.5rem] w-auto"
                height={500}
                width={500}
              ></Image>
            </button>

            <button onClick={() => handleSlide(Dir.FWD)}>
              <Image
                alt=""
                src="/testimonial/right.png"
                className="h-[6.5rem] w-auto"
                height={500}
                width={500}
              ></Image>
            </button>
          </div>
        </div>

        <div className="border text-center text-white rounded-xl border-primary-main flex flex-col items-center py-20 justify-between h-[40vh]">
          <p className="text-xl w-[60%] mb-10">
            {testimonial[number].testimony}
          </p>

          <div className="flex gap-5 justify-center items-center">
            <div className="w-[50px] h-[50px] border border-primary-main rounded-full overflow-hidden">
              <Image
                alt=""
                src={testimonial[number].src}
                className="h-[50px]"
                height={50}
                width={50}
              ></Image>
            </div>

            <span className="text-md">{testimonial[number].name}</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
