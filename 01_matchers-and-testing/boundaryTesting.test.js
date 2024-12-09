import { describe, it, expect } from 'vitest';
import { canDrive, isPriceInRange, isValidUsername } from './boundaryTesting';

describe('isPriceInRange test suite', () => {
  it('should return false when the price is outside the range', () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(200, 0, 100)).toBe(false);
  });

  it('should return true when the price is equal to the min or the max', () => {
    expect(isPriceInRange(0, 0, 100)).toBe(true);
    expect(isPriceInRange(100, 0, 100)).toBe(true);
  });

  it('should return true when the price lies within the range', () => {
    expect(isPriceInRange(50, 0, 100)).toBe(true);
  });
});

describe('Parameterized test suite (equivalent to isPriceInRange test suite)', () => {
  it.each([
    { price: -10, min: 0, max: 100, result: false },
    { price: 200, min: 0, max: 100, result: false },
    { price: 0, min: 0, max: 100, result: true },
    { price: 100, min: 0, max: 100, result: true },
    { price: 50, min: 0, max: 100, result: true },
  ])(
    'should return $result for ($price, $min, $max)',
    ({ price, min, max, result }) => {
      expect(isPriceInRange(price, min, max)).toBe(result);
    },
  );
});

describe('isValidUsername test suite', () => {
  const minLength = 5;
  const maxLength = 15;

  it('should return false if the username is too short', () => {
    expect(isValidUsername('a'.repeat(minLength - 1))).toBe(false);
  });

  it('should return false if the username is too long', () => {
    expect(isValidUsername('a'.repeat(maxLength + 1))).toBe(false);
  });

  it('should return true if the username is at min or max length', () => {
    expect(isValidUsername('a'.repeat(minLength))).toBe(true);
    expect(isValidUsername('a'.repeat(maxLength))).toBe(true);
  });

  it('should return true if the username is within the length constraint', () => {
    expect(isValidUsername('a'.repeat(minLength + 1))).toBe(true);
    expect(isValidUsername('a'.repeat(maxLength - 1))).toBe(true);
  });

  it('should return false for invalid input types', () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(1)).toBe(false);
  });
});

describe('Parameterized test suite (equivalent to isValidUsername test suite)', () => {
  const minLength = 5;
  const maxLength = 15;
  it.each([
    { username: 'a'.repeat(minLength - 1), result: false },
    { username: 'a'.repeat(maxLength + 1), result: false },
    { username: 'a'.repeat(minLength), result: true },
    { username: 'a'.repeat(maxLength), result: true },
    { username: 'a'.repeat(minLength + 1), result: true },
    { username: 'a'.repeat(maxLength - 1), result: true },
    { username: null, result: false },
    { username: undefined, result: false },
    { username: 1, result: false },
  ])('should return $result for $username', ({ username, result }) => {
    expect(isValidUsername(username)).toBe(result);
  });
});

describe('canDrive test suite', () => {
  it('should return error for invalid country code', () => {
    expect(canDrive(20, 'FR')).toMatch(/invalid/i);
  });

  it('should return false for underage in the US', () => {
    expect(canDrive(15, 'US')).toBe(false);
  });

  it('should return true for min age in the US', () => {
    expect(canDrive(16, 'US')).toBe(true);
  });

  it('should return false for eligible in the US', () => {
    expect(canDrive(25, 'US')).toBe(true);
  });

  it('should return false for underage in the UK', () => {
    expect(canDrive(16, 'UK')).toBe(false);
  });

  it('should return true for min age in the UK', () => {
    expect(canDrive(17, 'UK')).toBe(true);
  });

  it('should return false for eligible in the UK', () => {
    expect(canDrive(25, 'UK')).toBe(true);
  });
});

describe('Parameterized test suite (equivalent to canDrive test suite)', () => {
  it.each([
    { age: 15, country: 'US', result: false },
    { age: 16, country: 'US', result: true },
    { age: 25, country: 'US', result: true },
    { age: 16, country: 'UK', result: false },
    { age: 17, country: 'UK', result: true },
    { age: 27, country: 'UK', result: true },
  ])(
    'should return $result for ($age, $country)',
    ({ age, country, result }) => {
      expect(canDrive(age, country)).toBe(result);
    },
  );
});
