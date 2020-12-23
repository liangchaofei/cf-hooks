import { useRef, useCallback } from 'react';
import { ReturnValue } from '../useThrottleFn';

type noop = (...args: any[]) => any;

function useDebounceFn<T extends any[]>(
  fn: (...args: T) => any,
  delay: number = 1000,
): ReturnValue<T> {
  const timer = useRef<number>();
  const fnRef = useRef<noop>(fn);
  fnRef.current = fn;

  const _delay = delay;

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  const run = useCallback(
    (...args: any[]) => {
      cancel();
      timer.current = window.setTimeout(() => {
        fnRef.current(...args);
      }, _delay);
    },
    [cancel],
  );

  return {
    cancel,
    run,
  };
}

export default useDebounceFn;
