import delay from 'delay';

export const charge = async (creditCardInfo, amount) => {
  console.log(`Charging Credit Card: ${creditCardInfo.creditCardNumber}`);
  console.log(`Amount: ${amount}`);
  await delay(3000);
  return { status: 'success' };
};
