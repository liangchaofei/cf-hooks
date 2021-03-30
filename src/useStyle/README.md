---
title: useStyle
nav:
  title: Hooks
  path: /hooks
group:
  title: useStyle
---

# useStyle

动态加载样式的 Hook。

## 代码演示

### 加载样式

<code src="./demo/demo1.tsx" />

### 加载 css

<code src="./demo/demo1.tsx" />

## API

```typescript
const {
  loadedState, errorState
} = useStyle(
  href: string,
  properties?: StyleProperties
);
```

## 参数

| 参数       | 说明                                                                                                                                                                                             | 类型            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| href       | 样式文件地址                                                                                                                                                                                     | string          |
| properties | [HTMLLinkElement 支持的属性](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLLinkElement)或[HTMLStyleElement 支持的属性](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLStyleElement) | StyleProperties |

### 返回值

| 参数        | 说明                 | 类型               |
| ----------- | -------------------- | ------------------ |
| loadedState | 样式文件是否加载完毕 | Boolean            |
| errorState  | 样式文件加载错误实例 | ErrorEvent \| null |
