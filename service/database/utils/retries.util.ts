/**
 * Run a function and retry it if throws an error
 * @param fn A function to run
 * @param maxRetries The number of retries--The total number of tries is maxRetries + 1 including the original try
 * @param test A function that accepts the thrown value and returns a boolean on whether to retry or not.
 *             Useful if you want to only retry certain types of errors.
 * @returns The results of fn
 */
export const withRetry = async <T>(
  fn: () => T | Promise<T>,
  { maxRetries = 2, test = (e: Error | unknown) => e instanceof Error } = {}
): Promise<T> => {
  try {
    return await fn();
  } catch (e) {
    if (test(e) && maxRetries > 0) {
      console.error("retrying", e);
      return withRetry(fn, { maxRetries: maxRetries - 1, test });
    }
    throw e;
  }
};
