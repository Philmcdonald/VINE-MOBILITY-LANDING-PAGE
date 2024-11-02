"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSlide = () => {
  const maxNumber = 2;
  const [current, setCurrent] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev < maxNumber ? prev + 1 : 1));
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [maxNumber]);

  return (
    <div className="relative h-[70vh] border">
      <Image
        alt=""
        src={`/hero/hero${current}.png`}
        className={`absolute h-full w-auto transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        height={500}
        width={500}
      />
    </div>
  );
};

export default HeroSlide;
