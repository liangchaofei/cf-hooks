import React from 'react';
import useMouse from '..';

export default () => {
  const [_, state] = useMouse();

  return <div>Mouse Pos: {JSON.stringify(state)}</div>;
};
