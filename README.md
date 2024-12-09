# JavaScript Unit Testing Repository

A dedicated repository for learning and practicing JavaScript unit testing concepts and techniques. This repository includes examples, exercises and projects using popular testing framework `vitest`. Topics covered include:

- Understand the fundamentals of unit testing and its significance in JavaScript development.
- Master the setup and usage of Vitest for effective JavaScript testing.
- Discover the best practices for writing clean, maintainable, and trustworthy tests.
- Learn various techniques to run and debug tests effectively.
- Explore VSCode shortcuts to boost coding productivity.
- Master working with matchers and crafting precise, effective assertions.
- Practice positive, negative, and boundary testing to cover a wide range of test scenarios.
- Break dependencies in your tests with mocks.
- Improve code quality with static analysis, including TypeScript, ESLint, and Prettier.
- Automate code quality checks with Husky to maintain high coding standards.

## Topics

- Unit Testing introduction
- Types of tests
- Choosing a testing framework
- Setting up `vitest`
- Test-driven development
- Code coverage
- Characteristics of Good unit test
- Good Assertions practice
- Matcher functions
- Mocks

## Characteristics of Good Unit Tests

- Maintainable
  - Have a clear name
  - Tests a single behavior
  - Are small (ideally, less than 10 lines)
  - Have clear variables/constants
  - Are properly formatted
- Robust
  - Resilient to changes in the code
  - Test the behavior, not the implemenation (Test the what's, not the how's)
  - Avoid tight assertions
- Trust-worthy
  - A test that can be trusted
  - Code works (Problem in code, not in the test)
  - No false/positives/negatives
  - Validate the correct behavior
  - Test boundary conditions
  - Are deterministic
  - Are not dependent on random data or, current date/time or, global state.
  - Tests should be isolated

## Boundary Testing

- A testing technique where we focus on the edges or boundaries of input values.

## Credits

This repository follows the course [Mastering JavaScript Unit Testing](https://codewithmosh.com/p/mastering-javascript-unit-testing) by [Mosh Hamedani](https://codewithmosh.com/).

This repository is perfect for developers looking to strengthen their JavaScript testing skills or track their progress in mastering unit testing. Contributions and feedback are welcome!
