import delay from 'delay';

export const isValidEmail = (email) => {
  const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return emailPattern.test(email);
};

export const sendEmail = async (to, message) => {
  console.log(`Sending email to ${to}...`);
  console.log(`Message: ${message}`);
  await delay(3000);
};
