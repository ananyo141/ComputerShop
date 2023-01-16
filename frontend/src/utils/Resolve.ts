// Resolve a promise to return list of data and error if any
export const resolve = async (promise: Promise<any>): Promise<any> => {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
