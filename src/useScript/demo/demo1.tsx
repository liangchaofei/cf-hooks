/*
 * @Author: your name
 * @Date: 2021-03-30 16:03:45
 * @LastEditTime: 2021-03-30 16:05:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useScript/demo/demo1.tsx
 */
import React, { useState } from 'react';
import { Button, Alert, message } from 'antd';
import useScript from '..';

export default () => {
  const [src, setSrc] = useState('');
  const [loaded, error] = useScript(src, {
    async: true,
    onload: () => {
      message.success('脚本加载成功！');
    },
    onerror: () => {
      message.error('脚本加载失败！');
    },
  });

  return (
    <>
      <Button
        type="primary"
        onClick={() => setSrc('https://code.jquery.com/jquery.js')}
        style={{ marginBottom: 16 }}
        disabled={!!src}
      >
        加载
      </Button>
      {src &&
        (error ? (
          <Alert message={`加载失败：${JSON.stringify(error)}`} type="error" />
        ) : loaded ? (
          <Alert message="加载成功" type="success" />
        ) : (
          <Alert message={<>加载中</>} type="info" />
        ))}
    </>
  );
};
