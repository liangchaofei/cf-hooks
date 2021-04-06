/*
 * @Author: your name
 * @Date: 2021-04-06 10:34:04
 * @LastEditTime: 2021-04-06 10:35:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useEventListener/demo/demo1.tsx
 */
import React from 'react';

import { message } from 'antd';
import useEventListener from '..';

export default () => {
  const btnRef = useEventListener('click', () => {
    message.info('click');
  });
  return (
    <>
      <div ref={btnRef}>点击</div>
    </>
  );
};
