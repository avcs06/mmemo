import { MEMOIZED } from "./constants";

interface MemoizeOptions {
  onlyOnce?: boolean
}

type MemoizedFunction<T> = T & { reset: () => void }

export type Memoize<T extends Function> = (fn: T, options?: MemoizeOptions) => MemoizedFunction<T>
