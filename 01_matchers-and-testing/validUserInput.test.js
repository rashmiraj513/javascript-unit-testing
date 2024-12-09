import { describe, it, expect } from 'vitest';
import { validateUserInput } from './validUserInput';

describe('validUserInput test suite', () => {
  it('should return success if given a valid input', () => {
    expect(validateUserInput('Rashmi Raj', 25)).toMatch(/success/i);
  });

  it('should return an error if the username is not a string', () => {
    expect(validateUserInput(1, 25)).toMatch(/invalid/i);
  });

  it('should return an error if the username is less than 3 characters', () => {
    expect(validateUserInput('Mo', 25)).toMatch(/invalid/i);
  });

  it('should return an error if the username is longer than 255 characters', () => {
    expect(validateUserInput('A'.repeat(256), 25)).toMatch(/invalid/i);
  });

  it('should return an error if the age is not a number', () => {
    expect(validateUserInput('Raj', '25')).toMatch(/invalid/i);
  });

  it('should return an error if the age is less than 18', () => {
    expect(validateUserInput('Raj', 7)).toMatch(/invalid/i);
  });

  it('should return an error if the age is greater than 100', () => {
    expect(validateUserInput('Raj', 102)).toMatch(/invalid/i);
  });

  it('should return an error if both the username and the age are invalid', () => {
    expect(validateUserInput('', 2)).toMatch(/invalid username/i);
    expect(validateUserInput('', 2)).toMatch(/invalid age/i);
  });
});
