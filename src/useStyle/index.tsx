/*
 * @Author: your name
 * @Date: 2021-03-30 15:35:18
 * @LastEditTime: 2021-03-30 15:46:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useStyle/index.tsx
 */
import { useState, useEffect } from 'react';

type StyleProperties =
  | {
      [K in keyof HTMLLinkElement]?: HTMLLinkElement[K];
    }
  | {
      [K in keyof HTMLStyleElement]?: HTMLStyleElement[K];
    };

const useStyle = (
  href: string,
  properties?: StyleProperties,
): [boolean, ErrorEvent | null] => {
  const [loadedState, setLoadedState] = useState(false);
  const [errorState, setErrorState] = useState<ErrorEvent | null>(null);

  useEffect(() => {
    if (!href && !(properties && properties.innerHTML)) return;

    if (href) {
      const styleLinkEl = document.createElement('link');
      styleLinkEl.href = href;
      styleLinkEl.rel = 'stylesheet';

      if (properties) {
        Object.keys(properties).forEach(key => {
          // @ts-ignore
          styleLinkEl[key] = properties[key];
        });
      }

      const handleStyleLoad = () => {
        setLoadedState(true);
      };

      const handleStyleError = (error: ErrorEvent) => {
        setErrorState(error);
      };

      styleLinkEl.addEventListener('load', handleStyleLoad);
      styleLinkEl.addEventListener('eror', handleStyleLoad);

      document.head.appendChild(styleLinkEl);

      return () => {
        styleLinkEl.removeEventListener('load', handleStyleLoad);
        styleLinkEl.removeEventListener('error', handleStyleError);
      };
    }

    const stylesheetEl = document.createElement('style');
    stylesheetEl.type = 'text/css';

    Object.keys(properties!).forEach(key => {
      // @ts-ignore
      stylesheetEl[key] = properties[key];
    });
    document.head.appendChild(stylesheetEl);
  }, [href, properties && properties.innerHTML]);

  return [loadedState, errorState];
};

export default useStyle;
