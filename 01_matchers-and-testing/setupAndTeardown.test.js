import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'vitest';

describe('setupAndTeardown test suite', () => {
  beforeAll(() => {
    console.log('Before all called');
  });

  beforeEach(() => {
    console.log('Before each called');
  });

  afterEach(() => {
    console.log('After each called');
  });

  afterAll(() => {
    console.log('After all called');
  });

  it('Test case 1', {});

  it('Test case 2', {});
});
