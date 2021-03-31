/*
 * @Author: your name
 * @Date: 2021-03-31 10:41:51
 * @LastEditTime: 2021-03-31 10:52:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useStorage/demo/demo1.tsx
 */
import React from 'react';
import { Button, Input } from 'antd';
import useStorage from '..';

export default () => {
  const [name, setName] = useStorage<string>('name', 'world');

  return (
    <>
      <Button onClick={() => setName()} style={{ marginBottom: 16 }}>
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
