import { trackPageView } from './libs/analytics';
import { getExchangeRate } from './libs/currency';
import { isValidEmail, sendEmail } from './libs/email';
import { charge } from './libs/payment';
import security from './libs/security';
import { getShippingQuote } from './libs/shipping';

// Lesson: Mocking modules
export const getPriceInCurrency = (price, currency) => {
  const rate = getExchangeRate('USD', currency);
  return price * rate;
};

// Exercise
export const getShippingInfo = (destination) => {
  const quote = getShippingQuote(destination);
  if (!quote) {
    return 'Shipping Unavailable';
  }
  return `Shipping Cost: $${quote.cost} (${quote.estimatedDays} Days)`;
};

// Lesson: Interaction testing
export const renderPage = async () => {
  trackPageView('/home');

  return '<div>content</div>';
};

// Exercise
export const submitOrder = async (order, creditCard) => {
  const paymentResult = await charge(creditCard, order.totalAmount);

  if (paymentResult.status === 'failed')
    return { success: false, error: 'payment_error' };

  return { success: true };
};

// Lesson: Partial mocking
export const signUp = async (email) => {
  if (!isValidEmail(email)) return false;

  await sendEmail(email, 'Welcome aboard!');
  return true;
};

// Lesson: Spying on functions
export const login = async (email) => {
  const code = security.generateCode();

  await sendEmail(email, code.toString());
};

// Lesson: Mocking dates
export const isOnline = async () => {
  const availableHours = [8, 20];
  const [open, close] = availableHours;
  const currentHour = new Date().getHours();

  return currentHour >= open && currentHour <= close;
};

// Exercise
export const getDiscount = async () => {
  const today = new Date();
  const isChristmasDay = today.getMonth() === 11 && today.getDate() === 25;
  return isChristmasDay ? 0.2 : 0;
};
