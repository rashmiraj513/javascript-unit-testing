export const getShippingQuote = (destination) => {
  console.log(`Getting a shipping quote for ${destination}...`);
  return { cost: 10 * Math.random(), estimatedDays: 2 };
};
