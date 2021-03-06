/*
 * @Author: your name
 * @Date: 2021-03-30 16:41:58
 * @LastEditTime: 2021-03-31 10:52:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useCookie/demo/demo1.tsx
 */
import React from 'react';
import { Button, Input } from 'antd';
import useCookie from '..';

export default () => {
  const [name, setName] = useCookie<string>('name', 'world');

  return (
    <>
      <Button
        type="primary"
        onClick={() => setName()}
        style={{ marginBottom: 16 }}
      >
        删除
      </Button>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </>
  );
};
