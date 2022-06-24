import { MEMOIZED } from "./constants";

interface MemoizeOptions {
  onlyOnce?: boolean
}

interface MemoizedFunction extends Function {
  [MEMOIZED]: MemoizedFunction;
  reset: () => void
}

export type Memoize = (fn: Function, options?: MemoizeOptions) => MemoizedFunction
