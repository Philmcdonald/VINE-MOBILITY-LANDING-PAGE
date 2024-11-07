const evModels = [
  { value: 4.1, label: <span>Tesla Model 3</span> },
  { value: 3.7, label: <span>Tesla Model S</span> },
  { value: 3.6, label: <span>Tesla Model X</span> },
  { value: 3.9, label: <span>Tesla Model Y</span> },
  { value: 4.0, label: <span>Tesla Cybertruck</span> },
  { value: 4.0, label: <span>Ford Mustang Mach-E</span> },
  { value: 3.5, label: <span>Chevrolet Bolt EV</span> },
  { value: 3.2, label: <span>Nissan Leaf</span> },
  { value: 3.4, label: <span>Hyundai Kona Electric</span> },
  { value: 3.6, label: <span>Kia Niro EV</span> },
  { value: 3.1, label: <span>Volkswagen ID.4</span> },
  { value: 4.2, label: <span>Lucid Air</span> },
  { value: 3.3, label: <span>Porsche Taycan</span> },
  { value: 3.5, label: <span>BMW i4</span> },
  { value: 3.4, label: <span>Ford F-150 Lightning</span> },
  { value: 3.0, label: <span>Rivian R1T</span> },
  { value: 3.6, label: <span>Mercedes EQS</span> },
  { value: 3.8, label: <span>Hyundai Ioniq 5</span> },
  { value: 3.5, label: <span>Volvo XC40 Recharge</span> },
  { value: 3.9, label: <span>Sony Vision-S</span> },
  { value: 4.0, label: <span>Fisker Ocean</span> },
  { value: 3.7, label: <span>Subaru Solterra</span> },
  { value: 3.2, label: <span>Honda e</span> },
  { value: 3.4, label: <span>Mercedes EQB</span> },
  { value: 3.8, label: <span>Polestar 2</span> },
  { value: 3.6, label: <span>Volkswagen ID.3</span> },
  { value: 3.7, label: <span>Audi e-tron</span> },
  { value: 3.5, label: <span>Audi Q4 e-tron</span> },
  { value: 3.3, label: <span>BMW iX</span> },
  { value: 3.6, label: <span>BMW i3</span> },
  { value: 4.0, label: <span>Chrysler Pacifica Hybrid</span> },
  { value: 3.5, label: <span>Genesis GV60</span> },
  { value: 3.8, label: <span>Mercedes EQA</span> },
  { value: 3.9, label: <span>Citroën ë-C4</span> },
  { value: 3.2, label: <span>MG ZS EV</span> },
  { value: 3.5, label: <span>BYD Han EV</span> },
];

const milesRange = [
  { value: 25, label: <span>20 - 30</span> },
  { value: 35, label: <span>30 - 40</span> },
  { value: 45, label: <span>40 - 50</span> },
];

const priceRange = [
  { value: 40000, label: <span>30,000 - 50,000</span> },
  { value: 65000, label: <span>50,000 - 70,000</span> },
  { value: 89000, label: <span>70,000 - 100,000</span> },
  { value: 135000, label: <span>100,000 - 150,000</span> },
  { value: 175000, label: <span>150,000 - 200,000</span> },
];

const tankSize = [
  { value: "small car", label: <span>Small Car</span> },
  { value: "sedan", label: <span>Sudan</span> },
  { value: "suv", label: <span>SUV</span> },
  { value: "truck", label: <span>Truck</span> },
];

const travelDistanceOptions = [
  { value: "veryShort", label: <span>1 - 10 km</span> },
  { value: "short", label: <span>20 - 40 km</span> },
  { value: "medium", label: <span>50 - 70 km</span> },
  { value: "long", label: <span>80 - 100 km</span> },
  { value: "extended", label: <span>100 - 150 km</span> },
  { value: "veryLong", label: <span>150 - 200 km</span> },
  { value: "superLong", label: <span>200+ km</span> },
];

type Question = {
  id: number;
  text: string;
  question: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "one",
    text: "Technologies like Smart EV Chargers would increase the value of your properties ",
  },
  {
    id: 2,
    question: "two",
    text: "Incorporating cutting-edge technology like Smart EV chargers would significantly increase the value of your properties? ",
  },
  {
    id: 3,
    question: "three",
    text: "Would you like to pioneer adopting green technologies in your properties?",
  },
  {
    id: 4,
    question: "four",
    text: "With the rising cost of petrol would you go for alternatives? ",
  },
  {
    id: 5,
    question: "five",
    text: "Are you interested in a home upgrade that would increase the market value of your property? ",
  },
  {
    id: 6,
    question: "six",
    text: "Does the idea of contributing to a greener environment appeal to you?",
  },
  {
    id: 7,
    question: "seven",
    text: "Properties that include modern amenities like Smart EV chargers is valuable and would attract high-end clients? ",
  },
  {
    id: 8,
    question: "eight",
    text: "Integrating smart EV chargers into your homes would position you as a forward-thinker?",
  },
  {
    id: 9,
    question: "nine",
    text: "Providing EV charging facilities at your business premises would attract more customers/clients?",
  },
  {
    id: 10,
    question: "ten",
    text: "Would you be interested in a service that can potentially reduce your operational costs by leveraging solar-powered EV chargers?",
  },
  {
    id: 11,
    question: "ten",
    text: "Providing EV charging facilities at your business premises would attract more customers/clients?",
  },
];

export {
  evModels,
  milesRange,
  priceRange,
  tankSize,
  travelDistanceOptions,
  questions,
};
