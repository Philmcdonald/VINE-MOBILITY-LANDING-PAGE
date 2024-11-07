import { Section, Card, HeaderGreen, Heading } from "@/components";
import Image from "next/image";
import { PropositionButton } from "./Proposition.client";

const cardContent = [
  {
    src: "/icons/card1.png",
    text: "Keep your property ahead of the tech curve",
  },
  {
    src: "/icons/card2.png",
    text: "Attract higher offers from buyers and renters",
  },
  {
    src: "/icons/card3.png",
    text: "Boost tenant retention and satisfaction",
  },
];

const Proposition = () => {
  return (
    <Section
      classes="border-t border-t-[#8FC03FB2] pt-8 md:pt-14"
      id="proposition"
    >
      <div className="text-center">
        <h3 className="font-bold text-3xl sm:text-4xl mb-10">
          Why Vine Mobility?
        </h3>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14">
          {cardContent.map((card, index) => {
            return (
              <Card key={index}>
                <div>
                  <Image
                    alt=""
                    src={card.src}
                    className="w-auto h-14 mb-2 mx-auto"
                    height={500}
                    width={500}
                  />
                </div>

                <p className="font-bold text-lg leading-snug w-[80%] mx-auto sm:w-[90%]">
                  {card.text}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-16 md:pt-10 md:pb-3 md:mt-16">
      <h3 className="font-bold text-3xl sm:text-4xl mb-10">
          Exclusive Pre-Launch Offer
        </h3>

        <div className="propositionSlide mt-[1.5rem] h-[50vh] md:h-[70vh]"></div>

        <div className="self-center mt-5">
          <Heading>
            Preview of <HeaderGreen>Vine Mobility</HeaderGreen> EV Charging
            product launching in 2025
          </Heading>
          <p className="font-medium text-[.9rem] md:text-[1.05rem] leading-snug mb-2">
            Dont miss out on being a pioneer. The first 100 sign-ups gets:
          </p>

          <p className="font-medium text-[.9rem] md:text-[1.05rem] leading-snug mb-5">
            The first 100 sign up gets access to: <br /> - <strong>Exclusive discount</strong> on
            all EV chargers before launch day <br /> - <strong>Free installation</strong>
          </p>

          <PropositionButton />
        </div>
      </div>
    </Section>
  );
};
export default Proposition;
