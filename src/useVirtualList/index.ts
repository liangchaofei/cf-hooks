import { useEffect, useState, useMemo } from 'react';
import useSize from '../useSize';

interface IProps {
  itemHeight?: number | ((index: number) => number);
  overScan?: number;
}

export default <T>(data: T[], options: IProps) => {
  const { itemHeight = 30, overScan = 5 } = options;
  const [scrollRef, size] = useSize<HTMLDivElement>();
  const [range, setRange] = useState({ start: 0, end: 10 });

  // 滚动容器宽高变化时重新计算渲染范围
  useEffect(() => {
    getListRange();
  }, [size?.width, size?.height]);

  // 计算渲染数据范围（可视区数量+上下预留数量）
  const getListRange = () => {
    const ele = scrollRef.current;
    if (ele) {
      const offset = getRangeOffset(ele.scrollTop);
      const viewCapacity = getViewCapacity(ele.clientHeight);

      const from = offset - overScan;
      const to = offset + viewCapacity + overScan;
      setRange({
        start: from < 0 ? 0 : from,
        end: to > data.length ? data.length : to,
      });
    }
  };

  // 根据滚动容器 scrollTop 计算可视区数据起始索引
  const getRangeOffset = (scrollTop: number) => {
    if (typeof itemHeight === 'number') {
      return Math.floor(scrollTop / itemHeight) + 1;
    }
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < data.length; i++) {
      const height = (itemHeight as (index: number) => number)(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };

  // 计算可视区元素数量
  const getViewCapacity = (scrollHeight: number) => {
    if (typeof itemHeight === 'number') {
      return Math.ceil(scrollHeight / itemHeight);
    }
    const { start = 0 } = range;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < data.length; i++) {
      const height = (itemHeight as (index: number) => number)(i);
      sum += height;
      if (sum >= scrollHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  // 内容容器总高度
  const totalHeight = useMemo(() => {
    if (typeof itemHeight === 'number') {
      return data.length * itemHeight;
    }
    return data.reduce((pre, cur, index) => pre + itemHeight(index), 0);
  }, [data.length]);

  // 当前渲染的数据列表
  const list = useMemo(
    () =>
      data.slice(range.start, range.end).map((ele, index) => ({
        data: ele,
        index: index + range.start,
      })),
    [data, range],
  );

  // 计算上方偏移高度
  const getDistanceTop = (index: number) => {
    if (typeof itemHeight === 'number') {
      return index * itemHeight;
    }
    return data
      .slice(0, index)
      .reduce((pre, cur, index) => pre + itemHeight(index), 0);
  };

  return {
    list,
    scrollRef,
    containerProps: {
      ref: scrollRef,
      onScroll: (e: any) => {
        e.preventDefault();
        getListRange();
      },
      style: { overflowY: 'auto' as const },
    },
    wrapperProps: {
      style: {
        width: '100%',
        height: totalHeight,
        paddingTop: getDistanceTop(range.start),
      },
    },
  };
};
