---
title: useClickOutside
nav:
  title: Hooks
  path: /hooks
group:
  title: useClickOutside
---

# useClickOutside

优雅的管理目标元素外点击事件的 hook。

## 代码演示

<code src="./demo/demo1.tsx" />

## API

```ts
const ref = useClickOutside<T extends HTMLElement = any>(
  dom: RefType = undefined,
  onClickAway: (event: KeyboardEvent) => void,
): MutableRefObject<T>;
```

### 参数

| 参数        | 说明                                                             | 类型                                            |
| ----------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| dom?        | 可选项，如果未传入则会监听返回结果中的 ref，否则会监听传入的节点 | HTMLElement \| (() => HTMLElement) \| undefined |
| onClickAway | 触发事件的函数                                                   | (event) => void                                 |

### 返回值

| 参数 | 说明                                          | 类型                 |
| ---- | --------------------------------------------- | -------------------- |
| ref  | 当未传入任何参数时，将 ref 绑定给需监听的节点 | MutableRefObject<T\> |
