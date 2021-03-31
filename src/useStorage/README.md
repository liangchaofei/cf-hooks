---
title: useStorage
nav:
  title: Hooks
  path: /hooks
group:
  title: useStorage
---

# useStyle

用于同步和管理 localStorage / sessionStorage 的 hook。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx" />

### 使用对象作值

<code src="./demo/demo2.tsx" />

## API

```ts
const [state, setState] = useStorage<T>(
  key: string,
  defaultValue?: T,
  storage: Storage = localStorage,
  raw: boolean = false,
): [T | undefined, (value?: T | (previousValue: T) => T)) => void];
```

### 参数

| 参数         | 说明                                  | 类型    | 默认值       |
| ------------ | ------------------------------------- | ------- | ------------ |
| key          | 键名                                  | string  | -            |
| defaultValue | 默认值，服务端渲染或取值失败时使用    | T       | -            |
| storage      | Web Storage 对象，默认为 localStorage | Storage | localStorage |
| raw          | 是否自动进行 JSON 处理，默认不进行    | boolean | false        |

### 返回值

| 参数     | 说明                                            | 类型                                            |
| -------- | ----------------------------------------------- | ----------------------------------------------- |
| state    | 键名对应的 storage 的值或默认值                 | T \| undefined                                  |
| setState | 设置键名对应的 storage 的值，不传参数时表示删除 | (value?: T \| (previousValue: T) => T)) => void |
