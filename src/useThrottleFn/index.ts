import { useRef, useCallback } from 'react';

export interface ReturnValue<T extends any[]> {
  run: (...args: T) => void;
  cancel: () => void;
}

type noop = (...args: any[]) => any;

function useThrottleFn<T extends any[]>(
  fn: (...args: T) => any,
  delay = 1000,
): ReturnValue<T> {
  const _delay = delay;
  const timer = useRef<number>();

  const currentArgs = useRef<any[]>([]);

  const fnRef = useRef<noop>(fn);
  fnRef.current = fn;

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  const run = useCallback(
    (...args: any[]) => {
      currentArgs.current = args;
      if (!timer.current) {
        timer.current = window.setTimeout(() => {
          fnRef.current(...currentArgs.current);
          timer.current = undefined;
        }, _delay);
      }
    },
    [_delay, cancel],
  );

  return {
    cancel,
    run,
  };
}

export default useThrottleFn;
