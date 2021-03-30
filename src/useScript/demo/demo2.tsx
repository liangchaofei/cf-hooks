/*
 * @Author: your name
 * @Date: 2021-03-30 16:05:20
 * @LastEditTime: 2021-03-30 16:05:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useScript/demo/demo2.tsx
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import useScript from '..';

export default () => {
  const [innerHTML, setInnerHTML] = useState('');
  useScript('', {
    innerHTML,
  });

  return (
    <>
      <Button
        type="primary"
        onClick={() => setInnerHTML("window.alert('Hello World!')")}
        style={{ marginBottom: 16 }}
        disabled={!!innerHTML}
      >
        执行
      </Button>
    </>
  );
};
