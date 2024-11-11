import { Section, HeaderGreen, Heading } from "@/components";
import { HeroButton } from "./Hero.client";

const Hero = () => {
    return (
        <Section>
            <div className='grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[50%_50%] gap-10 md:gap-0 items-center'>
                {/* ============== Content ================ */}
                <div className='text-center md:text-left'>
                    <Heading>
                        The
                        <HeaderGreen>Future</HeaderGreen>
                        is Here,
                        <br /> Elevate your
                        <HeaderGreen>Property</HeaderGreen>
                    </Heading>

                    <p className='font-medium mb-5'>
                        Join the future of electric mobility with Vine
                        MObility&apos;s smart EV charger. Designed for homes,
                        businesses, and public spaces, our charger enhances
                        property value and attracts eco-conscious buyers and
                        tenants.
                        <br />
                        <span className='mt-3 block'>
                            Don&apos;t miss our exclusive pre-launch offer!
                        </span>
                    </p>

                    <div className='flex items-center gap-5 w-full mt-6 flex-wrap'>
                        <HeroButton />

                        <p className='font-medium hidden md:block text-md md:text-[.9rem] lg:text-[1.05rem]'>
                            Subscribe Now
                        </p>
                    </div>
                </div>

                {/* ============== Image ================ */}
                <div className='h-[40vh] md:h-[50vh] lg:h-[70vh] max-h-[20rem] md:max-h-[21rem] lg:max-h-[30rem] rounded-2xl w-full md:w-[89%]  lg:w-[85%] justify-self-end relative heroSlide'>
                    <div className='heroFloatingText top-[15%] right-[-50px] sm:right-[-25px]'>
                        Businesses
                    </div>

                    <div className='heroFloatingText md:top-[20%] lg:top-[35%] left-[-50px] sm:left-[-40px] md:left-[-30px]'>
                        Homes
                    </div>

                    <div className='heroFloatingText top-[75%] right-[-50px] sm:right-[-25px]'>
                        Commercial Properties
                    </div>
                </div>
            </div>
        </Section>
    );
};
export default Hero;
