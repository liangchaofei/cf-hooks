import React from 'react';
import useMouse from '..';

export default () => {
  const [ref, state] = useMouse<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        width: 300,
        height: 300,
        background: '#000',
        color: '#fff',
      }}
    >
      Mouse Pos: {JSON.stringify(state)}
    </div>
  );
};
