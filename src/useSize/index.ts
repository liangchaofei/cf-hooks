/*
 * @Author: your name
 * @Date: 2020-12-22 10:27:49
 * @LastEditTime: 2021-04-01 10:41:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useSize/index.ts
 */
import { useState, useRef, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface Size {
  height?: number;
  width?: number;
}

type Target<T> = T | (() => T);

const useSize = <T extends HTMLElement = any>(
  ele?: Target<T>,
): [React.MutableRefObject<T>, Size] => {
  const [size, setSize] = useState<Size>(() => {
    const dom = typeof ele === 'function' ? ele() : ele;
    return {
      width: dom?.clientWidth || 0,
      height: dom?.clientHeight || 0,
    };
  });

  const ref = useRef<T>();

  useLayoutEffect(() => {
    if (ele) {
      ref.current = typeof ele === 'function' ? ele() : ele;
    }

    const ro = new ResizeObserver((entries: any) => {
      for (const entry of entries) {
        const { clientWidth, clientHeight } = entry.target;
        setSize({
          width: clientWidth,
          height: clientHeight,
        });
      }
    });

    if (ref.current) {
      ro.observe(ref.current);
    }

    return () => {
      ro.disconnect();
    };
  }, [typeof ele === 'function' ? undefined : ele]);
  return [ref as React.MutableRefObject<T>, size];
};

export default useSize;
