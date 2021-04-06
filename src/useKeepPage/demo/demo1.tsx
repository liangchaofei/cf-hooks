/*
 * @Author: your name
 * @Date: 2021-04-06 10:54:13
 * @LastEditTime: 2021-04-06 10:56:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useKeepPage/demo/demo1.tsx
 */
import React from 'react';
import { Switch } from 'antd';
import useKeepPage from '..';

export default () => {
  const [shouldKeepPage, setShouldKeepPage] = useKeepPage(true, () => {
    console.log('onleave');
  });
  const changeShouldKeepPage = () => {
    setShouldKeepPage(!shouldKeepPage);
  };
  return (
    <>
      <span>是否在离开前提示：</span>
      <Switch defaultChecked onChange={changeShouldKeepPage}>
        <span key="open">是</span>
        <span key="close">否</span>
      </Switch>
    </>
  );
};
