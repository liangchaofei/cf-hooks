/*
 * @Author: your name
 * @Date: 2021-03-31 11:21:48
 * @LastEditTime: 2021-03-31 11:23:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useClipboardCopy/demo/demo1.tsx
 */
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import useClipboardCopy from '..';

export default () => {
  const [value, setValue] = useState('curry_fe');
  const { isSupported, isCopied, copy, clear } = useClipboardCopy();

  return (
    <>
      <p>isSupported: {String(isSupported)}</p>
      <p>isCopied: {String(isCopied)}</p>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Button type="primary" onClick={() => copy(value)}>
        复制输入框文本
      </Button>
    </>
  );
};
