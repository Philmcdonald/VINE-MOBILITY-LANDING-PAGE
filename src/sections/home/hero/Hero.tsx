import { Section, HeaderGreen, Heading } from "@/components";
import { HeroButton } from "./Hero.client";

const Hero = () => {
  return (
    <Section>
      <div className="grid grid-cols-2 items-center">
        {/* ============== Content ================ */}
        <div className=" ">
          <Heading>
            The
            <HeaderGreen>Future</HeaderGreen>
            is Here,
            <br /> Elevate your
            <HeaderGreen>Property</HeaderGreen>
          </Heading>

          <p className="font-semibold text-md w-[85%] mb-5">
            <span>
              Vine Mobility brings smart EV chargers, custom-designed for homes,
              businesses, and commercial properties. Pinnacle of luxury in
              electric mobility.
            </span>
            <br />
            <span className="mt-5 block">
              Access an exclusive discount for the first 100 subscribers before
              launch day!
            </span>
          </p>

          <div className="flex items-center gap-5 w-full mt-6">
            <HeroButton />
            <p className="font-bold text-2xl">Subscribe Now</p>
          </div>
        </div>

        {/* ============== Image ================ */}
        <div className="h-[70vh] border max-h-[35rem] rounded-xl w-full justify-self-end relative heroSlide">
          <div className="w-[100px] py-1 px-2 text-primary-main text-center text-sm bg-white rounded-md border border-primary-main absolute top-[15%] right-[-50px]">
            Businesses
          </div>

          <div className="w-[100px] py-1 px-2 text-primary-main text-center text-sm bg-white rounded-md border border-primary-main absolute top-[35%] left-[-50px]">
            Homes
          </div>

          <div className=" py-1 px-2 text-primary-main text-center text-sm bg-white rounded-md border border-primary-main absolute top-[75%] right-[-50px]">
            Commercial Properties
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Hero;
