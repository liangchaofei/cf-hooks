---
title: useKeepPage
nav:
  title: Hooks
  path: /hooks
group:
  title: useKeepPage
---

# useKeepPage

在关闭或刷新页面时给出提示，尤其适用于填写表单的页面。

## 代码演示

### 关闭或刷新本页面以查看效果

<code src="./demo/demo1.tsx" />

## API

```ts
const [shouldKeepPage, setShouldKeepPage] = useKeepPage(
  initShouldKeepPage: boolean,
  onLeave?: Function,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>];
```

### 参数

| 参数                  | 说明                                                                         | 类型     |
| --------------------- | ---------------------------------------------------------------------------- | -------- |
| initialShouldKeepPage | 是否应在关闭或刷新页面前提示                                                 | boolean  |
| onLeave               | 可选参数，在 beforeunload 事件发生且 shouldKeepPage 为 true 时执行的回调函数 | Function |

### 返回值

| 参数              | 说明                                       | 类型     |
| ----------------- | ------------------------------------------ | -------- |
| shouldKeepPage    | 是否应在关闭或刷新页面前提示               | boolean  |
| setShouldKeepPage | 设置是否应在关闭或刷新页面前提示的回调函数 | Function |
