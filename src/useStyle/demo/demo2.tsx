/*
 * @Author: your name
 * @Date: 2021-03-30 16:01:31
 * @LastEditTime: 2021-03-30 16:01:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useStyle/demo/demo2.tsx
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import useStyle from '..';

export default () => {
  const [innerHTML, setInnerHTML] = useState('');
  useStyle('', {
    innerHTML,
  });

  return (
    <>
      <Button
        type="primary"
        onClick={() =>
          setInnerHTML(`
          .byte-btn-primary {
            background: green !important;
          }
        `)
        }
        style={{ marginBottom: 16 }}
        disabled={!!innerHTML}
      >
        执行
      </Button>
    </>
  );
};
