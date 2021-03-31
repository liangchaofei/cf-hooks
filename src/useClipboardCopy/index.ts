/*
 * @Author: your name
 * @Date: 2021-03-31 11:08:31
 * @LastEditTime: 2021-03-31 11:25:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useClipboardCopy/index.tsx
 */
import { useState, useRef, useMemo, useCallback } from 'react';
import clipboardCopy from './clipbordCopy';

type Options = {
  onSuccess?: (text: string) => void;
  onError?: (error: any) => void;
};

type Result<T> = {
  ref: React.MutableRefObject<T | undefined>;
  isSupported: boolean;
  isCopied: boolean;
  copyText: string;
  copy: (text?: string | undefined) => void;
  clear: () => void;
  cut: () => void;
};

const useClipboardCopy = <T extends HTMLElement = any>(
  options: Options = {},
): Result<T> => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyText, setCopyText] = useState('');

  const ref = useRef<T>();

  const isSupported = useMemo(() => {
    return !!(
      navigator.clipboard ||
      (document.execCommand &&
        document.queryCommandSupported &&
        document.queryCommandSupported('copy'))
    );
  }, []);

  function copyHandle(text: string) {
    clipboardCopy(text)
      .then(() => {
        if (options.onSuccess) {
          options.onSuccess(text);
        }
        setCopyText(text);
      })
      .catch(error => {
        if (options.onError) {
          options.onError(error);
        }
      });
  }

  const copy = useCallback((text?: string) => {
    if (typeof text !== 'string') {
      const target = ref.current as any;
      if (!target) return;
      text = target.value || target.innerText;
    }
    copyHandle(text!);
    setIsCopied(true);
  }, []);

  const clear = useCallback(() => {
    copyHandle('');
    setIsCopied(false);
  }, []);

  const cut = useCallback(() => {
    const target = ref.current as any;
    if (!target) return;

    const text = target.value || target.innerText;

    target.value = '';
    target.innerText = '';

    copyHandle(text);
    setIsCopied(true);
  }, []);

  return {
    ref,
    isSupported,
    isCopied,
    copyText,
    copy,
    clear,
    cut,
  };
};

export default useClipboardCopy;
