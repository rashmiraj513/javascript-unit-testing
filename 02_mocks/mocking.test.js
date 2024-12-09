import { it, describe, expect, vi, beforeEach } from 'vitest';

describe('Mocking lesson test suite', () => {
  let greet;

  beforeEach(() => {
    greet = vi.fn();
  });

  it('should return a string with mock function', () => {
    // Returning a string with mock function
    greet.mockReturnValue('Hello');

    const result = greet();
    expect(result).toBe('Hello');
  });

  it('should return a Promise with mock function', () => {
    // Returning a Promise with mock function
    greet.mockResolvedValue('Hello');
    greet().then((result) => {
      expect(result).toBe('Hello');
    });
  });

  it('should return the implementation with mock function', () => {
    // Returning an implementation with mock function
    greet.mockImplementation((name) => 'Hello ' + name);
    const result = greet('Raj');

    expect(result).toBe('Hello Raj');
  });

  it('should pass if the implementation with mock function is called', () => {
    greet.mockImplementation((name) => 'Hello ' + name);

    greet('Raj');
    expect(greet).toHaveBeenCalled();
  });

  it('should pass if the implementation with mock function with the same arg is called', () => {
    greet.mockImplementation((name) => 'Hello ' + name);

    greet('Raj');
    expect(greet).toHaveBeenCalledWith('Raj');
  });

  // Both test cases fails (Intentional)
  // it('should fail if the implementation with mock function with the different arg is called', () => {
  //   greet.mockImplementation((name) => 'Hello ' + name);

  //   greet('Raj');
  //   expect(greet).toHaveBeenCalledWith('Rashmi');
  // });

  // it('should fail is the implementation with mock function is called more than once', () => {
  //   greet.mockImplementation((name) => 'Hello ' + name);

  //   greet('Raj');
  //   greet('Rashmi');
  //   expect(greet).toHaveBeenCalledOnce();
  // });

  it('should pass is the implementation with mock function is called more than once', () => {
    greet.mockImplementation((name) => 'Hello ' + name);

    greet('Raj');
    greet('Rashmi');
    expect(greet).toHaveBeenCalledTimes(2);
  });
});

describe('Mocking exercise test suite', () => {
  it('should return ok with the mock function', () => {
    // Create a mock for the following function
    const sendText = vi.fn();
    sendText.mockReturnValue('ok');

    // Call the mock function
    const result = sendText('message');

    // Assert that the mock function is called
    expect(sendText).toHaveBeenCalledWith('message');

    expect(result).toBe('ok');
  });
});
