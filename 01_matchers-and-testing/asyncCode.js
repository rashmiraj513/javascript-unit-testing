export const fetchData = () => {
  return [1, 2, 3];
};

// Lesson: Testing asynchronous code
export const fetchDataAsync = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    });
  });
};

// Lesson: Testing asynchronous code
export const fetchDataAsyncRejected = async () => {
  return Promise.reject({ reason: 'Operation failed!' });
};
