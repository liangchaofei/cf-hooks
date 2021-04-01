---
title: useHover
nav:
  title: Hooks
  path: /hooks
group:
  title: useHover
---

# useHover

用于感知元素是否处于 hover 状态 Hook。

## 代码演示

### 通过 mouseenter 和 mouseleave 模拟 hover

<code src="./demo/demo1.tsx" />

## API

```ts
const [ref, isHovered] = useHover<T extends HTMLElement = any>(
  el?: T | (() => T),
  options?: Options,
  deps: any[] = [],
): [React.MutableRefObject<T>, boolean];
```

### 参数

| 参数    | 说明                                                                           | 类型         |
| ------- | ------------------------------------------------------------------------------ | ------------ |
| el      | 监听的 DOM 元素，若使用 ref 可不传                                             | T \| () => T |
| options | 可选配置项，见 Options                                                         | Options      |
| deps    | 依赖数组，如果数组变化，则会重新绑定事件，在元素为懒加载时使用，否则会处理失败 | any[]        |

### 返回值

| 参数      | 说明           | 类型                                    |
| --------- | -------------- | --------------------------------------- |
| ref       | 元素 ref       | React.MutableRefObject<T \| undefined\> |
| isHovered | 元素是否 Hover | boolean                                 |

### Options

| 参数    | 说明                 | 类型       |
| ------- | -------------------- | ---------- |
| onEnter | 鼠标移入时触发的回掉 | () => void |
| onLeave | 鼠标移出时触发的回掉 | () => void |
