import React, { useState } from 'react';
import { Button } from 'antd';
import useDebounceFn from '..';

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(() => {
    setValue(value + 1);
  });

  return (
    <div>
      <p style={{ marginTop: 16 }}> 数字: {value} </p>
      <Button type="primary" onClick={run}>
        快速点击
      </Button>
    </div>
  );
};
