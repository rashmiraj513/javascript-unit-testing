import { describe, vi, it, expect } from 'vitest';
import { getExchangeRate } from './libs/currency';
import { getShippingQuote } from './libs/shipping';
import {
  getDiscount,
  getPriceInCurrency,
  getShippingInfo,
  isOnline,
  login,
  signUp,
  submitOrder,
} from './mockingModules';
import { charge } from './libs/payment';
import { sendEmail } from './libs/email';
import security from './libs/security';

// Mocking the module (This line will be executed before the import statement)
vi.mock('./libs/currency');
vi.mock('./libs/shipping');
vi.mock('./libs/payment');

describe('getPriceInCurrency test suite', () => {
  it('should return price in target currency', () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, 'AUD');
    expect(price).toBe(15);
  });
});

describe('getShippingInfo test suite', () => {
  it('should return shipping unavailable if quote cannot be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);

    const result = getShippingInfo('London');
    expect(result).toMatch(/unavailable/i);
  });

  it('should return shipping info if quote can be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 10, estimatedDays: 2 });

    const result = getShippingInfo('London');

    expect(result).toMatch('$10');
    expect(result).toMatch(/2 days/i);
    expect(result).toMatch(/shipping cost: \$10 \(2 days\)/i);
  });
});

describe('submitOrder test suite', () => {
  const order = { totalAmount: 10 };
  const creditCard = { creditCardNumber: '1234' };

  it('should charge the customer', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    await submitOrder(order, creditCard);

    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  it('should return success when the payment is successful', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: true });
  });

  it('should return success when payment is successful', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'failed' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: false, error: 'payment_error' });
  });
});

describe('signUp test suite', () => {
  const email = 'name@domain.com';

  it('should return false if email is not valid', async () => {
    const result = await signUp('a');

    expect(result).toBe(false);
  });

  it('should return true if email is valid', async () => {
    const result = await signUp(email);

    expect(result).toBe(true);
  });

  it('should send the welcome email if email is valid', async () => {
    await signUp(email);

    expect(sendEmail).toHaveBeenCalledOnce();
    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});

describe('login test suite', () => {
  it('should email the one-time login code', async () => {
    const email = 'name@domain.com';
    const spy = vi.spyOn(security, 'generateCode');

    await login(email);

    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});

describe('isOnline test suite', () => {
  it('should return false if current hour is outside opening hours', () => {
    vi.setSystemTime('2024-01-01 07:59');
    expect(isOnline()).toBe(false);

    vi.setSystemTime('2024-01-01 20:01');
    expect(isOnline()).toBe(false);
  });

  it('should return true if current hour is within opening hours', () => {
    vi.setSystemTime('2024-01-01 08:00');
    expect(isOnline()).toBe(true);

    vi.setSystemTime('2024-01-01 19:59');
    expect(isOnline()).toBe(true);
  });
});

describe('getDiscount test suite', () => {
  it('should return .2 on Christmas day', () => {
    vi.setSystemTime('2024-12-25 00:01');
    expect(getDiscount()).toBe(0.2);

    vi.setSystemTime('2024-12-25 23:59');
    expect(getDiscount()).toBe(0.2);
  });

  it('should return 0 on any other day', () => {
    vi.setSystemTime('2024-12-24 00:01');
    expect(getDiscount()).toBe(0);

    vi.setSystemTime('2024-12-26 00:01');
    expect(getDiscount()).toBe(0);
  });
});
