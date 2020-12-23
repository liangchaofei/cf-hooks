---
title: useThrottleFn
nav:
  title: Hooks
  path: /hooks
group:
  title: useThrottleFn
---

# useThrottleFn

用来处理节流函数的 Hook。

## 代码演示

<code src="./demo/demo1.tsx" />

## API

```typescript
const {
  run,
  cancel
} = useThrottleFn(
  fn: (...args: any[]) => any,
  delay: number = 1000
);
```

## 参数

| 参数  | 说明                     | 类型                    | 默认值 |
| ----- | ------------------------ | ----------------------- | ------ |
| fn    | 需要节流的函数           | (...args: any[]) => any | -      |
| delay | 节流间隔时间，单位为毫秒 | number                  | 1000   |

## 返回值

| 参数   | 说明           | 类型                    |
| ------ | -------------- | ----------------------- |
| run    | 已经节流的函数 | (...args: any[]) => any |
| cancel | 取消当前节流   | () => void              |
