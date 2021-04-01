import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import useThrottleFn from '../useThrottleFn';

type State = {
  x: number;
  y: number;
};

type Options = {
  throttle?: number;
};

const useMouse = <T extends HTMLElement = any>(
  el?: Window | T | (() => T),
  options?: Options,
  deps: any[] = [],
): [React.MutableRefObject<T>, State] => {
  const ref = useRef<T | Window>();
  const [state, setState] = useState<State>({ x: -1, y: -1 });

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const target = ref.current;
      if (!target || !event) return;

      if (target === window) {
        setState({
          x: Math.round(event.clientX),
          y: Math.round(event.clientY),
        });
        return;
      }
      // @ts-ignore
      const {
        left: offsetLeft,
        top: offsetTop,
      } = target.getBoundingClientRect();
      const pointX = event.clientX;
      const pointY = event.clientY;

      const isInRange = (target: HTMLElement) => {
        const horizontal =
          pointX >= offsetLeft && pointX <= target.offsetWidth + offsetLeft;
        const longitudinal =
          pointY >= offsetTop && pointY <= target.offsetHeight + offsetTop;
        return horizontal && longitudinal;
      };
      if (!isInRange(ref.current as HTMLElement)) {
        setState({
          x: -1,
          y: -1,
        });
      } else {
        setState({
          x: pointX - offsetLeft,
          y: pointY - offsetTop,
        });
      }
    },
    [ref.current, typeof el === 'function' ? undefined : el, ...deps],
  );

  const { run: handleMouseMoveThrottle } = useThrottleFn(
    handleMouseMove,
    options?.throttle || 50,
  );
  useLayoutEffect(() => {
    if (el) {
      ref.current = typeof el === 'function' ? el() : el;
    } else if (!ref.current) {
      ref.current = window;
    }

    if (ref.current) {
      window.addEventListener('mousemove', handleMouseMoveThrottle, false);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveThrottle, false);
    };
  }, [handleMouseMove]);

  return [ref as React.MutableRefObject<T>, state];
};

export default useMouse;
