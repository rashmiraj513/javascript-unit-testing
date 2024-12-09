import { describe, it, expect } from 'vitest';

import { calculateAverage, factorial, fizzBuzz, max } from './intro';

describe('max test suite', () => {
  it('should return the first argument if it is greater', () => {
    // Arrange
    const a = 2,
      b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if the arguments are equal', () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe('fizzBuzz test suite', () => {
  it('should return "FizzBuzz" if the arg is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return "Fizz" if the arg is only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return "Buzz" if the arg is only divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return the arg as a string if the arg is not divisible by 3 or 5', () => {
    expect(fizzBuzz(4)).toBe('4');
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(7)).toBe('7');
  });
});

describe('calculateAverage test suite', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with two elements', () => {
    expect(calculateAverage([2, 3])).toBe(2.5);
  });

  it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial test suite', () => {
  it('should return 1 if the argument is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 if the argument is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 if the argument is 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 if the argument is 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 if the argument is 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should return undefined if the argument is a negative number', () => {
    expect(factorial(-4)).toBeUndefined();
  });
});
