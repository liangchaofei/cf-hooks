/*
 * @Author: your name
 * @Date: 2021-03-30 16:22:49
 * @LastEditTime: 2021-03-30 16:41:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useCookie/index.ts
 */
import { useState, useCallback } from 'react';
import * as Cookies from 'js-cookie';

export interface IFuncUpdater<T> {
  (previousState?: T): T;
}

function isFunction<T>(obj: any): obj is T {
  return typeof obj === 'function';
}

const useCookie = <T>(
  key: string,
  defaultValue?: T,
  raw: boolean = true,
): [
  T | undefined,
  (value?: T | IFuncUpdater<T>, options?: Cookies.CookieAttributes) => void,
] => {
  const getCookieState = () => {
    try {
      const cookieValue = Cookies.get(key);
      if (typeof cookieValue !== 'string') {
        Cookies.set(
          key,
          raw ? String(defaultValue) : JSON.stringify(defaultValue),
        );
        return defaultValue;
      }
      return raw ? cookieValue : JSON.parse(cookieValue);
    } catch {
      return defaultValue;
    }
  };

  const [state, setInnerState] = useState<T | undefined>(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }
    return getCookieState();
  });

  const setState = useCallback(
    (newState?: T | IFuncUpdater<T>, options?: Cookies.CookieAttributes) => {
      if (newState === undefined) {
        Cookies.remove(key, options);
      } else if (isFunction<IFuncUpdater<T>>(newState)) {
        newState = newState(getCookieState());
        Cookies.set(
          key,
          raw ? String(newState) : JSON.stringify(newState),
          options,
        );
      } else {
        Cookies.set(
          key,
          raw ? String(newState) : JSON.stringify(newState),
          options,
        );
      }

      return setInnerState(newState);
    },
    [raw, setInnerState],
  );

  return [state, setState];
};

export default useCookie;
