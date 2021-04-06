/*
 * @Author: your name
 * @Date: 2021-04-06 11:08:05
 * @LastEditTime: 2021-04-06 11:11:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useClickOutside/demo/demo1.tsx
 */
import React, { useState } from 'react';
import useClickOutside from '..';
import { Button } from 'antd';

export default () => {
  const [counter, setCounter] = useState(0);
  useClickOutside(
    () => document.getElementById('box'),
    () => setCounter(c => c + 1),
  );
  return (
    <div>
      <Button id="box">点击我</Button>
      <p>数字：{counter}</p>
    </div>
  );
};
