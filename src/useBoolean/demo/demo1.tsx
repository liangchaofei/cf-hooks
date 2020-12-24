import React from 'react';
import { Button, Switch } from 'antd';
import 'antd/dist/antd.css';
import useBoolean from '..';

export default () => {
  const { status, toggle, setTrue, setFalse } = useBoolean(true);

  return (
    <div>
      <p>
        status：
        <Switch checked={status} />
      </p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </Button>
        <Button type="primary" onClick={setTrue}>
          Set true
        </Button>
      </p>
    </div>
  );
};
