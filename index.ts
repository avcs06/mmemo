import { MEMOIZED, NOT_FOUND, VALUE_KEY } from "./constants";
import type { Memoize } from "./types";

const getFromCache = (cache, args) =>
  args.every(arg => (cache = cache.get(arg))) ? (cache.has(VALUE_KEY) ? cache.get(VALUE_KEY) : NOT_FOUND) : NOT_FOUND

const setToCache = (cache, args, value) =>
  args.reduce((a, arg) => a.get(arg) || a.set(arg, new Map()).get(arg), cache).set(VALUE_KEY, value)

const memo: Memoize = (fn, options = {}) => {
  if (fn[MEMOIZED]) return fn[MEMOIZED];

  const cache = new Map();
  const memoized = (...args) => {
    const storedValue = getFromCache(cache, args);
    if (storedValue !== NOT_FOUND) {
      return storedValue;
    }

    const value = fn(...args);
    setToCache(cache, args, value)

    if (options.onlyOnce) cache.clear()
    return value
  }

  memoized.reset = () => cache.clear();
  memoized[MEMOIZED] = memoized;
  return memoized;
}

export default memo;
