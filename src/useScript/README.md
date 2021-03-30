---
title: useScript
nav:
  title: Hooks
  path: /hooks
group:
  title: useScript
---

# useStyle

动态加载 js 的 Hook。

## 代码演示

### 加载 js 脚本

<code src="./demo/demo1.tsx" />

### 加载 js

<code src="./demo/demo1.tsx" />

## API

```typescript
const {
  loadedState, errorState
} = useScript(
  src: string,
  properties?: StyleProperties
);
```

## 参数

| 参数       | 说明                                                                                               | 类型             |
| ---------- | -------------------------------------------------------------------------------------------------- | ---------------- |
| src        | 脚本文件地址                                                                                       | string           |
| properties | [HTMLScriptElement 支持的属性](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLScriptElement) | ScriptProperties |

### 返回值

| 参数        | 说明                 | 类型               |
| ----------- | -------------------- | ------------------ |
| loadedState | 脚本文件是否加载完毕 | Boolean            |
| errorState  | 脚本文件加载错误实例 | ErrorEvent \| null |
