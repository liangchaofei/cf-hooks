import React from 'react';
import useSize from '..';

export default () => {
  const [, size] = useSize(document.body);
  return (
    <div>
      改变窗口大小，查看尺寸变化 <br />
      width：{size?.width} <br />
      height：{size?.height}
    </div>
  );
};
