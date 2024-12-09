// Lesson: Boundary Testing
export const isPriceInRange = (price, min, max) => {
  return price >= min && price <= max;
};

// Exercise: Boundary Testing
export const isValidUsername = (username) => {
  const minLength = 5;
  const maxLength = 15;

  if (!username) return false;

  return username.length >= minLength && username.length <= maxLength;
};

// Exercise: Boundary Testing
export const canDrive = (age, countryCode) => {
  const legalDrivingAge = { US: 16, UK: 17 };

  if (!legalDrivingAge[countryCode]) {
    return 'Invalid country code!';
  }

  return age >= legalDrivingAge[countryCode];
};
