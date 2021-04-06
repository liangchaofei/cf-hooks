/*
 * @Author: your name
 * @Date: 2021-04-06 11:31:32
 * @LastEditTime: 2021-04-06 11:31:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useFullScreen/demo/demo1.tsx
 */
import React from 'react';
import { Button } from 'antd';
import useFullscreen from '..';

export default () => {
  const { ref, isFullScreen, setFull, exitFull, toggleFull } = useFullscreen<
    HTMLDivElement
  >();
  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>
        {isFullScreen ? 'Fullscreen' : 'Not fullscreen'}
      </div>
      <Button.Group>
        <Button type="primary" onClick={setFull}>
          setFull
        </Button>
        <Button type="primary" onClick={exitFull}>
          exitFull
        </Button>
        <Button type="primary" onClick={toggleFull}>
          toggle
        </Button>
      </Button.Group>
    </div>
  );
};
