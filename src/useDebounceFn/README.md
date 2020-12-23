---
title: useDebounceFn
nav:
  title: Hooks
  path: /hooks
group:
  title: useDebounceFn
---

# useDebounceFn

用来处理防抖函数的 Hook。

## 代码演示

<code src="./demo/demo1.tsx" />

## API

```typescript
const {
  run,
  cancel
} = useDebounceFn(
  fn: (...args: any[]) => any,
  delay: number = 1000
);
```

## 参数

| 参数  | 说明                     | 类型                    | 默认值 |
| ----- | ------------------------ | ----------------------- | ------ |
| fn    | 需要防抖的函数           | (...args: any[]) => any | -      |
| delay | 防抖间隔时间，单位为毫秒 | number                  | 1000   |

## 返回值

| 参数   | 说明           | 类型                    |
| ------ | -------------- | ----------------------- |
| run    | 已经防抖的函数 | (...args: any[]) => any |
| cancel | 取消当前防抖   | () => void              |
