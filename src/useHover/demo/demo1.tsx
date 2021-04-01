import React from 'react';
import useHover from '..';

export default () => {
  const [ref, isHovered] = useHover<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ width: 400, height: 400, padding: 100, background: 'green' }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          color: '#fff',
          background: 'red',
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        isHovered: {isHovered ? 'Yes' : 'No'}
      </div>
    </div>
  );
};
