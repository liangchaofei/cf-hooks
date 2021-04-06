import { Result } from 'antd';
import { useRef, useLayoutEffect, MutableRefObject } from 'react';
import screenfull from 'screenfull';
import useBoolean from '../useBoolean';

export interface Options<T> {
  defaultValue?: boolean;
  onExitFull?: () => void;
  onFull?: () => void;
}

export interface Result<T> {
  isFullScreen: boolean;
  setFull: () => void;
  exitFull: () => void;
  toggleFull: () => void;
  ref?: MutableRefObject<T>;
}

function useFullScreen<T extends HTMLElement = any>(
  el?: T | (() => T),
  options?: Options<T>,
): Result<T> {
  const { defaultValue, onFull, onExitFull } = options || {};

  const onFullRef = useRef(onFull);
  onFullRef.current = onFull;

  const onExitFullRef = useRef(onExitFull);
  onExitFullRef.current = onExitFull;

  const ele = useRef<T>();

  const { status, toggle, setTrue, setFalse } = useBoolean(defaultValue);

  useLayoutEffect(() => {
    if (!status) return;

    const passedInElement = typeof el === 'function' ? el() : el;
    const targetEl = passedInElement || ele.current;

    if (!targetEl) return;

    const onChange = () => {
      if (screenfull.isEnabled) {
        const { isFullscreen } = screenfull;
        toggle(isFullscreen);
      }
    };

    if (screenfull.isEnabled) {
      try {
        screenfull.request(targetEl);
        setTrue();
        if (onFullRef.current) {
          onFullRef.current();
        }
      } catch (error) {
        setFalse();
        if (onExitFullRef.current) {
          onExitFullRef.current();
        }
      }
    }

    return () => {
      if (screenfull.isEnabled) {
        try {
          screenfull.off('change', onChange);
          screenfull.exit();
        } catch (error) {}
      }

      if (onExitFullRef.current) {
        onExitFullRef.current();
      }
    };
  }, [status, typeof el === 'function' ? undefined : el]);

  const toggleFull = () => toggle();
  const result: Result<T> = {
    isFullScreen: !!status,
    setFull: setTrue,
    exitFull: setFalse,
    toggleFull,
  };

  if (!el) {
    result.ref = ele as MutableRefObject<T>;
  }
  return result;
}

export default useFullScreen;
