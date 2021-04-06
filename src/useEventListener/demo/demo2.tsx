/*
 * @Author: your name
 * @Date: 2021-04-06 10:45:35
 * @LastEditTime: 2021-04-06 10:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useEventListener/demo/demo2.tsx
 */
import React from 'react';
import useEventListener from '..';

export default () => {
  useEventListener('scroll', (e: Event) => {
    console.log('scroll');
  });
  return <p>scroll 事件：打开控制台看</p>;
};
