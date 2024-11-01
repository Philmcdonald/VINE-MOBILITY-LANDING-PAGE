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
    <Section classes="border-t border-t-[#8FC03FB2] pt-14" id="proposition">
      <div className="text-center">
        <h3 className="font-bold text-3xl mb-10">Why Vine Mobility?</h3>

        <div className="grid grid-cols-3 gap-16">
          {cardContent.map((card, index) => {
            return (
              <Card key={index}>
                <div>
                  <Image
                    alt=""
                    src={card.src}
                    className="w-auto h-14 mb-2"
                    height={500}
                    width={500}
                  ></Image>
                </div>

                <p className="font-bold text-lg leading-snug w-[80%]">
                  {card.text}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-[40%_55%] gap-16 pt-10 pb-3 mt-16">
        <div className="propositionSlide"></div>

        <div className="self-center">
          <Heading>
            Preview of <HeaderGreen>Vine Mobility</HeaderGreen> EV Charging
            product launching in 2025
          </Heading>
          <p className="text-lg leading-snug font-semibold mb-5">
            The first 100 sign up gets access to: <br /> - Exclusive discount on
            all EV chargers before launch day <br /> - Free installation
          </p>

          <PropositionButton />
        </div>
      </div>
    </Section>
  );
};
export default Proposition;
