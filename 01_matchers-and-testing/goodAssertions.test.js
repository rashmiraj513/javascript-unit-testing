import { describe, expect, it } from 'vitest';

describe('Good assertions test suite', () => {
  it('an example of good assertion for string', () => {
    const result = 'The requested file was not found.';

    // Loose Assertion (too general - Always pass)
    expect(result).toBeDefined();

    // Tight (too specific - Fragile, can break easily)
    expect(result).toBe('The requested file was not found.');

    // Better assertion using string
    expect(result).toMatch('not found');

    // Better assertion using regex (i denotes case insensitivity)
    expect(result).toMatch(/not found/i);
  });

  it('an example of good assertion for arrays where order of elements does not matter', () => {
    const result = [1, 2, 3];

    // Loose Assertion (too general - Always pass)
    expect(result).toBeDefined();

    // Tight (too specific - Fragile, can break easily)
    expect(result).toEqual([1, 2, 3]);

    // Better assertion using arrayContaining (Order doesn't matter)
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });

  it('an example of good assertion for arrays length', () => {
    const result = [1, 2, 3];

    // Loose Assertion (too general - Always pass)
    expect(result).toBeDefined();

    // Tight (too specific - Fragile, can break easily)
    expect(result).toHaveLength(3);

    // Better assertion using toBeGreaterThan (Length should be greater than 0)
    expect(result.length).toBeGreaterThan(0);
  });

  it('an example of good assertion for objects', () => {
    const result = { name: 'Rashmi' };

    // Loose Assertion (too general - Always pass)
    expect(result).toBeDefined();

    // Tight (too specific - Fragile, can break easily)
    expect(result).toEqual({ name: 'Rashmi' });

    // Better assertion using toMatchObject (Checking whether the object has the expected properties)
    expect(result).toMatchObject({ name: 'Rashmi' });

    // Better assertion using toHaveProperty (Checking whether the object has the expected property)
    expect(result).toHaveProperty('name');

    // Better assertion using typeof of the property
    expect(typeof result.name).toBe('string');
  });
});
