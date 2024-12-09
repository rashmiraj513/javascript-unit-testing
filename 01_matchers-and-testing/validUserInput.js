// Exercise: Positive and negative testing
export const validateUserInput = (username, age) => {
  let errors = [];

  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 255
  ) {
    errors.push('Invalid username');
  }

  if (typeof age !== 'number' || age < 18 || age > 100) {
    errors.push('Invalid age');
  }
  return errors.length === 0 ? 'Validation successful' : errors.join(', ');
};
