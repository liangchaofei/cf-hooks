/*
 * @Author: your name
 * @Date: 2021-04-06 10:59:19
 * @LastEditTime: 2021-04-06 11:06:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useClickOutside/index.ts
 */
import { useEffect, useCallback, useRef, MutableRefObject } from 'react';

const defaultEvent = 'click';

type RefType = HTMLElement | (() => HTMLElement | null) | undefined | null;

function useClickOutside<T extends HTMLElement = any>(
  dom: RefType = undefined,
  onClickAway: (event: KeyboardEvent) => void,
  eventName: string = defaultEvent,
): MutableRefObject<T> {
  const ele = useRef<T>();

  const handler = useCallback(
    e => {
      const targetEl = typeof dom === 'function' ? dom() : dom;
      const el = targetEl || ele.current;
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
      if (
        !el ||
        el.contains(e.target) ||
        (e.composedPath && e.composedPath().includes(el))
      ) {
        return;
      }
      onClickAway(e);
    },
    [ele.current, onClickAway, dom],
  );
  useEffect(() => {
    document.addEventListener(eventName, handler);

    return () => {
      document.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);

  return ele as MutableRefObject<T>;
}

export default useClickOutside;
