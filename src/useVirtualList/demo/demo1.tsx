import React from 'react';
import useVirtualList from '..';

export default () => {
  const { list, containerProps, wrapperProps } = useVirtualList(
    Array.from(Array(99999).keys()),
    {
      overScan: 10,
      itemHeight: 30,
    },
  );
  return (
    <>
      <div {...containerProps} style={{ height: '300px', overflow: 'auto' }}>
        <div {...wrapperProps}>
          {list.map(ele => (
            <div
              style={{
                height: 52,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.index}
            >
              {ele.data}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
