const PETROL_PRICE_PER_LITER: number = 1050;
const ELECTRICITY_PRICE_PER_KWH: number = 250;

const ICE_FUEL_CONSUMPTION: number = 10;
const EV_CONSUMPTION_PER_100KM: number = 15;
const DAYS_PER_WEEK: number = 7;

interface TravelRange {
  range: string;
  avgDailyKm: number;
}

export function calculateSavings(
  averageDailyKm: number,
  weeklyPetrolCost: number,
  evEfficiency: number,
  electricityCost: number
): number {
  const weeklyKm: number = averageDailyKm * DAYS_PER_WEEK;

  const costPerKmPetrol: number = weeklyPetrolCost / weeklyKm;
  const totalWeeklyPetrolCost: number = weeklyKm * costPerKmPetrol;

  const totalKwhNeeded: number = weeklyKm / evEfficiency;
  const electricityCostForEV: number = totalKwhNeeded * electricityCost;

  const savings: number = totalWeeklyPetrolCost - electricityCostForEV;

  return savings;
}

function calculateWeeklyPetrolCost(dailyKm: number): number {
  const litersNeeded: number = (dailyKm * DAYS_PER_WEEK) / ICE_FUEL_CONSUMPTION;
  return litersNeeded * PETROL_PRICE_PER_LITER;
}

const travelRanges: TravelRange[] = [
  { range: "20-40 km", avgDailyKm: 30 },
  { range: "50-70 km", avgDailyKm: 60 },
  { range: "80-100 km", avgDailyKm: 90 },
];



travelRanges.forEach(({ range, avgDailyKm }) => {
  const weeklyPetrolCost: number = calculateWeeklyPetrolCost(avgDailyKm);

  const savings: number = calculateSavings(
    avgDailyKm,
    weeklyPetrolCost,
    EV_CONSUMPTION_PER_100KM / 100, 
    ELECTRICITY_PRICE_PER_KWH
  );

  console.log(`For ${range} travel distance:`);
  console.log(
    `  Weekly Petrol Cost (ICE): ${weeklyPetrolCost.toLocaleString()} Naira`
  );
  console.log(`  Weekly Savings with EV: ${savings.toLocaleString()} Naira\n`);
});
