/*
 * @Author: your name
 * @Date: 2021-03-31 11:25:45
 * @LastEditTime: 2021-03-31 11:26:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useClipboardCopy/demo/demo2.tsx
 */
import React from 'react';
import { Button } from 'antd';
import useClipboardCopy from '..';

export default () => {
  const { ref, copy, clear } = useClipboardCopy();

  return (
    <>
      <p ref={ref}>curry_fe</p>
      <Button type="primary" onClick={() => copy()}>
        复制上方文本
      </Button>
      <Button onClick={() => clear()} style={{ marginLeft: 8 }}>
        清空剪切板
      </Button>
    </>
  );
};
