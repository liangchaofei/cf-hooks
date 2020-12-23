---
title: useVirtualList
nav:
  title: Hooks
  path: /hooks
group:
  title: useVirtualList
---

# useVirtualList

用来虚拟优化大量数据的 hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const result:Result = useVirtualList(data: any[], Options);
```

### 参数

| 参数    | 说明                   | 类型 |
| ------- | ---------------------- | ---- |
| data    | 包含大量数据的列表     | T[]  |
| options | 配置项，见下方 Options | -    |

### 返回值

| 参数           | 说明                      | 类型                       |
| -------------- | ------------------------- | -------------------------- |
| list           | 当前需要展示的列表内容    | {data: T, index: number}[] |
| containerProps | 滚动容器的 props          | { ref, onScroll, style }   |
| wrapperProps   | children 外层包裹器 props | { style }                  |

### Options

| 参数       | 说明                                | 类型                                  | 默认值 |
| ---------- | ----------------------------------- | ------------------------------------- | ------ |
| itemHeight | 每行高度                            | number \| ((index: number) => number) | 30     |
| overScan   | 可视区上、下额外展示的 dom 节点数量 | number                                | 5      |
