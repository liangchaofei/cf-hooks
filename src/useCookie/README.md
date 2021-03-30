---
title: useCookie
nav:
  title: Hooks
  path: /hooks
group:
  title: useCookie
---

# useCookie

管理 cookie 的 Hook。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx" />

### 使用对象作值

<code src="./demo/demo2.tsx" />

## API

```ts
const [state, setState] = useCookie<T>(
  key: string,
  defaultValue?: T,
  raw: boolean = true,
): [T | undefined, (value?: T | (previousValue: T) => T), options?: Cookies.CookieAttributes) => void];
```

### 参数

| 参数         | 说明                               | 类型    | 默认值 |
| ------------ | ---------------------------------- | ------- | ------ |
| key          | 键名                               | string  | -      |
| defaultValue | 默认值，服务端渲染或取值失败时使用 | T       | -      |
| raw          | 是否自动进行 JSON 处理，默认不进行 | boolean | true   |

### 返回值

| 参数     | 说明                                                     | 类型                                                                                |
| -------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| state    | 键名对应的 cookie 的值或默认值                           | T \| undefined                                                                      |
| setState | 设置键名对应的 cookie 的值以及设置属性，不传值时表示删除 | (value?: T \| (previousValue: T) => T), options?: Cookies.CookieAttributes) => void |

### options

参见 [js-cookie#cookie-attributes](https://www.npmjs.com/package/js-cookie#cookie-attributes)
