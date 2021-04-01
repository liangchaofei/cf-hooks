---
title: useMouse
nav:
  title: Hooks
  path: /hooks
group:
  title: useMouse
---

# useMouse

追踪鼠标在元素内坐标位置的 hook。

## 代码演示

### 当不指定元素时，返回坐标默认相对于 window

<code src="./demo/demo1.tsx" />

### 返回相对于指定元素的坐标，当不在元素上时返回 -1, -1

<code src="./demo/demo2.tsx" />

## API

```ts
const [ref, state] = useMouse<T extends HTMLElement>(
  el?: Window | T | (() => T),
  options?: Options,
  deps: any[] = [],
): [React.MutableRefObject<T>, State];
```

### 参数

| 参数    | 说明                                                                           | 类型                   |
| ------- | ------------------------------------------------------------------------------ | ---------------------- |
| el      | 鼠标坐标参照元素，若使用 ref 可不传                                            | T \| () => T           |
| options | 可选配置项，如节流时间                                                         | { throttle?: number; } |
| deps    | 依赖数组，如果数组变化，则会重新绑定事件，在元素为懒加载时使用，否则会处理失败 | any[]                  | [] |

### 返回值

| 参数  | 说明                       | 类型                                    |
| ----- | -------------------------- | --------------------------------------- |
| ref   | 元素 ref，未传入 el 时使用 | React.MutableRefObject<T \| undefined\> |
| state | 鼠标坐标位置信息           | { x: number; y: number }                |
