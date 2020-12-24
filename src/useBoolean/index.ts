import { useState, useMemo } from 'react';

interface ReturnValue {
  status: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean) => void;
}

export default (initVal?: boolean): ReturnValue => {
  const [status, setStatus] = useState(Boolean(initVal));
  const setMethods = useMemo(() => {
    const setFalse = () => setStatus(false);
    const setTrue = () => setStatus(true);
    const toggle = (val?: boolean) =>
      val == null ? setStatus(status => !status) : setStatus(val);
    return {
      setFalse,
      setTrue,
      toggle,
    };
  }, []);
  return {
    status,
    ...setMethods,
  };
};
