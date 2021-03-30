/*
 * @Author: your name
 * @Date: 2021-03-30 16:46:15
 * @LastEditTime: 2021-03-30 16:46:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useCookie/demo/demo2.tsx
 */
import React from 'react';
import { Button, Input, InputNumber } from 'antd';
import useCookie from '..';

type IUserInfo = {
  name: string;
  age: number;
  country: string;
};

export default () => {
  const [userInfo, setUserInfo] = useCookie<IUserInfo>('userInfo', {
    name: 'JavaScript',
    age: 24,
    country: 'USA',
  });

  return (
    <>
      <Button
        type="primary"
        onClick={() => setUserInfo()}
        style={{ marginBottom: 16 }}
      >
        删除
      </Button>
      <Input
        type="text"
        placeholder="Enter your name"
        value={userInfo && userInfo.name}
        onChange={name =>
          setUserInfo({
            ...userInfo,
            name,
          })
        }
        style={{ marginBottom: 16 }}
      />
      <InputNumber
        placeholder="Enter your age"
        value={userInfo && userInfo.age}
        onChange={age =>
          setUserInfo({
            ...userInfo,
            age,
          })
        }
        style={{ marginBottom: 16 }}
      />
      <Input
        type="text"
        placeholder="Enter your country"
        value={userInfo && userInfo.country}
        onChange={country =>
          setUserInfo({
            ...userInfo,
            country,
          })
        }
        style={{ marginBottom: 16 }}
      />
      {userInfo && (
        <div>
          {userInfo.name} is {userInfo.age} years old, born in{' '}
          {userInfo.country}.
        </div>
      )}
    </>
  );
};
