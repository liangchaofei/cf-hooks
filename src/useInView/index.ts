/*
 * @Author: your name
 * @Date: 2021-04-01 11:20:16
 * @LastEditTime: 2021-04-01 11:26:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useInView/index.ts
 */
import React, { useLayoutEffect, useState, useCallback, useRef } from 'react';
import 'intersection-observer';

const useInView = <T extends HTMLElement = any>(
  el?: T | (() => T),
  options?: IntersectionObserverInit,
  deps: any[] = [],
): [React.MutableRefObject<T>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>();

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    setInView(entries[0].isIntersecting);
  }, []);
  useLayoutEffect(() => {
    let target = ref.current;
    if (el) {
      target = typeof el === 'function' ? el() : el;
    }

    const ios = new IntersectionObserver(callback, options);
    if (target) {
      ios.observe(target);
    }
    return () => ios.disconnect();
  }, [ref.current, typeof el === 'function' ? undefined : el, ...deps]);
  return [ref as React.MutableRefObject<T>, inView];
};

export default useInView;
