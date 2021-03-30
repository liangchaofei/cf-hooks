/*
 * @Author: your name
 * @Date: 2021-03-30 15:46:25
 * @LastEditTime: 2021-03-30 15:54:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useStyle/demo/demo1.tsx
 */
import React, { useState } from 'react';
import { Button, message, Alert } from 'antd';
import useStyle from '..';

export default () => {
  const [href, setHref] = useState('');
  const [loaded, error] = useStyle(href, {
    onload: () => {
      message.success('样式加载成功');
    },
    onerror: () => {
      message.error('样式加载失败');
    },
  });

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setHref(
            'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css',
          );
        }}
        style={{ marginBottom: 16 }}
        disabled={!!href}
      >
        加载
      </Button>
      {href &&
        (error ? (
          <Alert type="error" message={`加载失败`}></Alert>
        ) : loaded ? (
          <Alert type="success" message={`加载成功`}></Alert>
        ) : (
          <Alert type="info" message={`加载中`}></Alert>
        ))}
    </>
  );
};
