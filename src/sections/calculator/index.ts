// Types for input parameters
export interface CalculatorInputs {
  petrolPricePerLitre: number; // Price of petrol per litre
  vehicleType: "small car" | "sedan" | "suv" | "truck"; // User-selectable vehicle type
  dailyTravelDistance:
    | "veryShort"
    | "short"
    | "medium"
    | "long"
    | "extended"
    | "veryLong"
    | "superLong"; // Travel distance category
  electricityPricePerKwh: number; // Price of electricity per kWh
  evBatteryCapacityKwh?: number; // EV battery capacity in kWh
}

// Types for the results
interface CalculatorResults {
  dailyIceCost: number;
  monthlyIceCost: number;
  dailyEvCost: number;
  monthlyEvCost: number;
  monthlySavings: number;
  summary: string;
}

// Mapping of vehicle types to average tank sizes (in liters)
// const tankSizeMapping: Record<CalculatorInputs["vehicleType"], number> = {
//   "small car": 40,
//   sedan: 50,
//   suv: 70,
//   truck: 100,
// };

// Mapping of daily travel distance to average distance in km
const travelDistanceMapping: Record<
  CalculatorInputs["dailyTravelDistance"],
  number
> = {
  veryShort: 5, // Average of 1-10 km
  short: 30, // Average of 20-40 km
  medium: 60, // Average of 50-70 km
  long: 90, // Average of 80-100 km
  extended: 125, // Average of 100-150 km
  veryLong: 175, // Average of 150-200 km
  superLong: 250, // Average of 200+ km
};

// Average fuel consumption in km per liter for ICE vehicles
const averageFuelEfficiency = 10; // 10 km per liter actual is 12.8

const averageElectricityConsumptionPer100Km = 15; // 15 kWh per 100 km actual is 16.6

// Main calculation function
function calculateCostComparison(inputs: CalculatorInputs): CalculatorResults {
  // const tankSize = tankSizeMapping[inputs.vehicleType]; // No actual use case for this

  const dailyDistance = travelDistanceMapping[inputs.dailyTravelDistance];

  // ICE Vehicle Costs
  const dailyFuelConsumption = dailyDistance / averageFuelEfficiency;
  const dailyIceCost = dailyFuelConsumption * inputs.petrolPricePerLitre;
  const monthlyIceCost = dailyIceCost * 30;

  // EV Costs
  const dailyElectricityConsumption =
    (dailyDistance / 100) * averageElectricityConsumptionPer100Km;
  const dailyEvCost =
    dailyElectricityConsumption * inputs.electricityPricePerKwh;
  const monthlyEvCost = dailyEvCost * 30;

  // Monthly Savings
  const monthlySavings = monthlyIceCost - monthlyEvCost;

  // Personalized summary message
  const summary = `By switching to an electric vehicle, you could save approximately ${monthlySavings.toFixed(
    2
  )} naira per month on fuel costs, given your travel distance and fuel/electricity prices. This adds up to about ${(
    monthlySavings * 12
  ).toFixed(2)} naira in annual savings!`;

  return {
    dailyIceCost,
    monthlyIceCost,
    dailyEvCost,
    monthlyEvCost,
    monthlySavings,
    summary,
  };
}

export default calculateCostComparison;
