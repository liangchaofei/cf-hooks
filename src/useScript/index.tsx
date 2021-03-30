/*
 * @Author: your name
 * @Date: 2021-03-30 16:02:52
 * @LastEditTime: 2021-03-30 16:03:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useScript/index.tsx
 */
import { useState, useEffect } from 'react';

type ScriptProperties = {
  [K in keyof HTMLScriptElement]?: HTMLScriptElement[K];
};

const useScript = (
  src: string,
  properties?: ScriptProperties,
): [boolean, ErrorEvent | null] => {
  const [loadedState, setLoadedState] = useState(false);
  const [errorState, setErrorState] = useState<ErrorEvent | null>(null);

  useEffect(() => {
    if (!src && !(properties && properties.innerHTML)) return;

    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';

    if (src) {
      scriptEl.src = src;
    }
    if (properties) {
      Object.keys(properties).forEach(key => {
        // @ts-ignore
        scriptEl[key] = properties[key];
      });
    }

    const handleScriptLoad = () => {
      setLoadedState(true);
    };

    const handleScriptError = (error: ErrorEvent) => {
      setErrorState(error);
    };

    scriptEl.addEventListener('load', handleScriptLoad);
    scriptEl.addEventListener('error', handleScriptError);

    document.body.appendChild(scriptEl);

    // @ts-ignore
    return () => {
      scriptEl.removeEventListener('load', handleScriptLoad);
      scriptEl.removeEventListener('error', handleScriptError);
    };
  }, [src, properties && properties.innerHTML]);

  return [loadedState, errorState];
};

export default useScript;
