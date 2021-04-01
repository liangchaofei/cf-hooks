import React from 'react';
import useInView from '..';

export default () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div>
      <div ref={ref} style={{ background: 'black', color: '#fff' }}>
        被观察元素
      </div>
      <div style={{ marginTop: 70, color: inView ? '#87d068' : '#f50' }}>
        {inView ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};
