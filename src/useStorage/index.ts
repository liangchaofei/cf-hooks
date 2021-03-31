/*
 * @Author: your name
 * @Date: 2021-03-31 10:24:04
 * @LastEditTime: 2021-03-31 10:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useStorage/index.ts
 */
import { useState, useCallback, useEffect } from 'react';

export interface IFuncUpdater<T> {
  (previousState?: T): T;
}

function isFunction<T>(obj: any): obj is T {
  return typeof obj === 'function';
}

const mockStorage = {
  getItem: () => {},
  setItem: () => {},
  removeItem: () => {},
} as any;

const useStorage = <T>(
  key: string,
  defaultValue?: T,
  storage?: Storage,
  raw: boolean = false,
): [T | undefined, (value?: T | IFuncUpdater<T>) => void] => {
  if (!storage) {
    storage = typeof window === 'undefined' ? mockStorage : localStorage;
  }

  const getStorageState = () => {
    try {
      const storageValue = storage!.getItem(key);
      if (typeof storageValue !== 'string') {
        storage!.setItem(
          key,
          raw ? String(defaultValue) : JSON.stringify(defaultValue),
        );
        return defaultValue;
      }
      return raw ? storageValue : JSON.parse(storageValue);
    } catch (error) {
      console.warn(`err: ${error}`);
      return defaultValue;
    }
  };

  const [state, setInnerState] = useState<T | undefined>(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }
    return getStorageState();
  });

  const setState = useCallback(
    (newState?: T | IFuncUpdater<T>) => {
      if (newState === undefined) {
        storage!.removeItem(key);
      } else if (isFunction<IFuncUpdater<T>>(newState)) {
        newState = newState(getStorageState());
        storage!.setItem(
          key,
          raw ? String(newState) : JSON.stringify(newState),
        );
      } else {
        storage!.setItem(
          key,
          raw ? String(newState) : JSON.stringify(newState),
        );
      }
      return setInnerState(newState);
    },
    [setInnerState, raw],
  );

  useEffect(() => {
    const handleStorage = (ev: StorageEvent) => {
      const { key: evKey, newValue, storageArea } = ev;
      if (evKey === key && storageArea === storage) {
        try {
          if (typeof newValue === 'string') {
            setInnerState(raw ? newValue : JSON.parse(newValue));
          } else {
            setInnerState(defaultValue);
          }
        } catch (error) {
          console.warn(`err: ${error}`);
          setInnerState(defaultValue);
        }
      }
    };
    window.addEventListener('storage', handleStorage, false);
    return () => {
      window.removeEventListener('storage', handleStorage, false);
    };
  }, [key, defaultValue, storage, raw]);

  return [state, setState];
};

export default useStorage;
