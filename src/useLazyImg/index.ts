/*
 * @Author: your name
 * @Date: 2021-04-07 17:40:26
 * @LastEditTime: 2021-04-07 17:55:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useLazyImg/index.ts
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';
import useInView from '../useInView';

type RefType = React.MutableRefObject<HTMLImageElement | undefined>;

export interface ReturnValue {
  ref: RefType;
  curSrc: string | undefined;
  loadStartState: boolean;
  loadedState: boolean;
  errorState: ErrorEvent | null;
}

interface SrcOptions {
  loadingSrc?: string | (() => string);
  fallbackScr?: string | (() => string);
}

const useLazyImg = (
  src: string | (() => string),
  srcOptions: SrcOptions = {},
  options?: IntersectionObserverInit | undefined,
) => {
  const ref = useRef<HTMLImageElement>();

  const [loadStartState, setLoadStartState] = useState(false);
  const [loadedState, setLoadedState] = useState(false);
  const [errorState, setErrorState] = useState<ErrorEvent | null>(null);
  const [_, inView] = useInView(() => ref.current!, options, []);

  const getTrueSrc = (src: string | (() => string)) => {
    return typeof src === 'function' ? src() : src;
  };

  useLayoutEffect(() => {
    const imgEl = ref.current;
    // 在可视区内且有图片节点且未开始加载
    if (inView && imgEl && !loadStartState) {
      setLoadStartState(true);

      const handleImgLoad = () => {
        setLoadedState(true);
      };
      const handleImgError = (error: ErrorEvent) => {
        setErrorState(error);
        if (srcOptions.fallbackScr) {
          const { fallbackScr } = srcOptions;
          imgEl.src = getTrueSrc(fallbackScr);
        }
      };
      if (srcOptions.loadingSrc) {
        const { loadingSrc } = srcOptions;
        imgEl.src = getTrueSrc(loadingSrc);

        const loadImageEl = new Image();
        const handleImgLoad = () => {
          setLoadedState(true);
          imgEl.src = loadImageEl.src;
        };
        loadImageEl.addEventListener('load', handleImgLoad);
        loadImageEl.addEventListener('error', handleImgError);
        loadImageEl.src = getTrueSrc(src);

        return () => {
          loadImageEl.removeEventListener('load', handleImgLoad);
          loadImageEl.removeEventListener('error', handleImgError);
        };
      }
      imgEl.addEventListener('load', handleImgLoad);
      imgEl.addEventListener('error', handleImgError);
      imgEl.src = getTrueSrc(src);

      return () => {
        imgEl.removeEventListener('load', handleImgLoad);
        imgEl.removeEventListener('error', handleImgError);
      };
    }
  }, [inView]);
  useLayoutEffect(() => {
    const imgEl = ref.current;
    if (loadedState && imgEl) {
      imgEl.src = getTrueSrc(src);
    }
  });

  const curSrc = useMemo(() => {
    if (loadedState) {
      return getTrueSrc(src);
    }

    if (errorState) {
      if (srcOptions.fallbackScr) {
        return getTrueSrc(srcOptions.fallbackScr);
      }
      return;
    }
    if (srcOptions.loadingSrc) {
      return getTrueSrc(srcOptions.loadingSrc);
    }
  }, [loadStartState, loadedState, errorState]);

  return {
    ref,
    curSrc,
    loadedState,
    loadStartState,
    errorState,
  };
};

export default useLazyImg;
