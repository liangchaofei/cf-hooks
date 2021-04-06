/*
 * @Author: your name
 * @Date: 2021-04-06 10:23:21
 * @LastEditTime: 2021-04-06 10:53:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useKeepPage/index.ts
 */
import { useState } from 'react';
import useEventListener from '../useEventListener';

function useKeepPage(
  initShouldKeepPage: boolean,
  onLeave?: Function,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [shouldKeepPage, setShouldKeepPage] = useState<boolean>(
    initShouldKeepPage,
  );

  useEventListener('beforeunload', (e: BeforeUnloadEvent) => {
    if (shouldKeepPage) {
      if (onLeave) onLeave();

      e.preventDefault();

      e.returnValue = '';

      return '/';
    }
  });

  return [shouldKeepPage, setShouldKeepPage];
}

export default useKeepPage;
