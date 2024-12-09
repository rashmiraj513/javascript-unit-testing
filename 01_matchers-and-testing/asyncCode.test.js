import { describe, it, expect } from 'vitest';
import { fetchData, fetchDataAsync, fetchDataAsyncRejected } from './asyncCode';

describe('fetchData test suite', () => {
  it('should return an array of numbers', () => {
    const result = fetchData();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});

describe('fetchDataAsync test suite using then block', () => {
  it('should return a promise that will resolve to an array of numbers', () => {
    fetchDataAsync().then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
    });
  });
});

describe('fetchDataAsync test suite using await keyword', () => {
  it('should return a promise that will resolve to an array of numbers', async () => {
    const result = await fetchDataAsync();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});

describe('fetchDataAsyncFailing test suite', () => {
  it('should return a Promise that is rejected', async () => {
    // Handle a rejected Promise inside try-catch block.
    try {
      await fetchDataAsyncRejected();
    } catch (err) {
      expect(err).toHaveProperty('reason');
      expect(err.reason).toMatch(/fail/i);
    }
  });
});
