---
title: useClipboardCopy
category: '浏览器'
nav:
  title: Hooks
  path: /hooks
group:
  title: useClipboardCopy
---

# useClipboardCopy

用于方便处理剪切板复制场景的 hook。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx" />

### 复制元素内容

<code src="./demo/demo2.tsx" />

## API

```ts
type Options = {
  onSuccess?: (text: string) => void;
  onError?: (error: any) => void;
}

type Result<T> = {
  ref: React.MutableRefObject<T | undefined>;
  isSupported: boolean;
  isCopied: boolean;
  copyText: string;
  copy: (text?: string) => void;
  cut: () => void;
  clear: () => void;
}

const result: Result<T> = useClipboardCopy<T extends HTMLElement = any>(options: Options = {});
```

### 参数

| 参数      | 说明         | 类型                   |
| --------- | ------------ | ---------------------- |
| onSuccess | 复制成功回调 | (text: string) => void |
| onError   | 复制失败回调 | (error: any) => void   |

### 返回值

| 参数        | 说明                                                                           | 类型                                    |
| ----------- | ------------------------------------------------------------------------------ | --------------------------------------- |
| ref         | 要复制内容所在元素，会尝试读取 `value` 属性或 `innerText` 属性                 | React.MutableRefObject\<T \| undefined> |
| isSupported | 是否支持剪切板相关 API，会检查 `navigator.clipboard` 和 `document.execCommand` | boolean                                 |
| isCopied    | 是否已经复制过                                                                 | boolean                                 |
| copyText    | 上一次被复制的文字                                                             | string                                  |
| copy        | 复制，可手动传值，也可通过绑定元素取值                                         | (text?: string) => void                 |
| cut         | 剪切，会先清空绑定元素的值再复制                                               | () => void                              |
| clear       | 清空剪切板                                                                     | () => void                              |
