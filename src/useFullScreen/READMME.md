---
title: useFullScreen
nav:
  title: Hooks
  path: /hooks
group:
  title: useFullScreen
---

# useFullScreen

用于控制 DOM 元素全屏状态的 hook。

## 代码演示

### 使用 ref 设置需要全屏的元素

<code src="./demo/demo1.tsx" />

## API

```ts
const {
   isFullscreen,
   setFull,
   exitFull,
   ref?,
} = useFullScreen(
  el?: T | (() => T),
  options?: Options,
);
```

### 参数

| 参数    | 说明                                                             | 类型                                            |
| ------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| el      | 可选项，如果未传入则会监听返回结果中的 ref，否则会监听传入的节点 | HTMLElement \| (() => HTMLElement) \| undefined |
| options | 如下                                                             | Options                                         |

### Options

| 参数         | 说明         | 类型       | 默认值 |
| ------------ | ------------ | ---------- | ------ |
| defaultValue | 是否默认全屏 | boolean    | false  |
| onExitFull   | 监听退出全屏 | () => void | -      |
| onFull       | 监听全屏     | () => void | -      |

### 返回值

| 参数         | 说明                                          | 类型                                    |
| ------------ | --------------------------------------------- | --------------------------------------- |
| isFullscreen | 是否全屏                                      | boolean                                 |
| setFull      | 设置全屏                                      | () => void                              |
| exitFull     | 退出全屏                                      | () => void                              |
| toggleFull   | 切换全屏                                      | () => void                              |
| ref          | 当未传入 el 参数时，将 ref 绑定给需全屏的节点 | React.MutableRefObject<T \| undefined\> |
