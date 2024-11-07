import { Section, HeaderGreen, Heading } from "@/components";
import { HeroButton } from "./Hero.client";

const Hero = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 md:gap-0 items-center">
        {/* ============== Content ================ */}
        <div className="text-center md:text-left">
          <Heading>
            The
            <HeaderGreen>Future</HeaderGreen>
            is Here,
            <br /> Elevate your
            <HeaderGreen>Property</HeaderGreen>
          </Heading>

          <p className="font-medium text-[.9rem] md:text-[1.05rem] mb-5">
  <span>
    Join the future of electric mobility with Vine MObility&apos;s smart EV charger. 
    Designed for homes, businesses, and public spaces, our charger enhances property 
    value and attracts eco-conscious buyers and tenants.
  </span>
  <br />
  <span className="mt-4 block">
    Don&apos;t miss our exclusive pre-launch offer!
  </span>
</p>


          <div className="flex items-center gap-5 w-full mt-6 flex-wrap">
            <HeroButton />

            <p className="font-bold hidden md:block text-md md:text-[1.2rem]">
              Subscribe Now
            </p>
          </div>
        </div>

        {/* ============== Image ================ */}
        <div className="h-[50vh] md:h-[70vh] max-h-[25rem] md:max-h-[30rem] rounded-2xl w-full md:w-[88%] border justify-self-end relative heroSlide">
          <div className="w-[100px] py-1 px-2 text-primary-main text-center text-sm bg-white rounded-md border border-primary-main hidden md:block md:absolute top-[15%] right-[-50px] sm:right-[-25px]">
            Businesses
          </div>

          <div className="w-[100px] hidden md:block absolute py-1 px-2 text-primary-main text-center text-sm bg-white rounded-md border border-primary-main  top-[35%] left-[-50px] sm:left-[-40px]">
            Homes
          </div>

          <div className=" md:block hidden absolute py-1 px-2 text-primary-main text-center text-sm bg-white rounded-md border border-primary-main  top-[75%] right-[-50px] sm:right-[-25px]">
            Commercial Properties
          </div>
        </div>
      </div>
    </Section>
  )
};
export default Hero;
