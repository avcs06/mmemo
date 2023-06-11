import { MEMOIZED } from "./constants";

interface MemoizeOptions {
  onlyOnce?: boolean
}

type AnyFunction = (...args: any[]) => any

export type MemoizedFunction<T extends AnyFunction> = T & { reset: () => void }

export interface Memoize {
  <T extends AnyFunction>(fn: T, options?: MemoizeOptions): MemoizedFunction<T>
}
