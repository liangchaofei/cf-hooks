---
title: useSize
nav:
  title: Hooks
  path: /hooks
group:
  title: useSize
---

# useSize

用于感知 dom 节点尺寸变化的 hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

### 传入 dom 节点

<code src="./demo/demo2.tsx" />

## API

```ts
const [ref, size] = useSize<T extends HTMLElement>(
  ele?: T | (() => T),
): [React.MutableRefObject<T>, Size];
```

### 参数

| 参数 | 说明                               | 类型         |
| ---- | ---------------------------------- | ------------ |
| ele  | 监听的 DOM 元素，若使用 ref 可不传 | T \| () => T |

### 返回值

| 参数 | 说明                        | 类型                                    |
| ---- | --------------------------- | --------------------------------------- |
| ref  | 元素 ref，未传入 ele 时使用 | React.MutableRefObject<T \| undefined\> |
| size | 元素尺寸信息                | { width: number; height: number }       |
