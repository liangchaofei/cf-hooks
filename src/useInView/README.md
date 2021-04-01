---
title: useInView
nav:
  title: Hooks
  path: /hooks
group:
  title: useInView
---

# useInView

用于感知元素是否处于可视范围的 hook，可用于懒加载、埋点等场景。

## 代码演示

### 感知元素可视状态变更，滚动窗口查看效果

<code src="./demo/demo1.tsx" />

## API

```ts
const [ref, inView] = useInView<T extends HTMLElement>(
  el?: T | (() => T),
  options?: IntersectionObserverInit,
  deps: any[] = [],
): [React.MutableRefObject<T>, boolean];
```

### 参数

| 参数    | 说明                                                                           | 类型                     |
| ------- | ------------------------------------------------------------------------------ | ------------------------ |
| el      | 监听的 DOM 元素，若使用 ref 可不传                                             | T \| () => T             |
| options | IntersectionObserver 监听配置                                                  | IntersectionObserverInit |
| deps    | 依赖数组，如果数组变化，则会重新绑定事件，在元素为懒加载时使用，否则会处理失败 | any[]                    | [] |

### 返回值

| 参数   | 说明                       | 类型                                    |
| ------ | -------------------------- | --------------------------------------- |
| ref    | 元素 ref，未传入 el 时使用 | React.MutableRefObject<T \| undefined\> |
| inView | 元素是否处于可视范围       | boolean                                 |
