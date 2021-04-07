---
title: useLazyImg
nav:
  title: Hooks
  path: /hooks
group:
  title: useLazyImg
---

# useLazyImg

用于管理图片懒加载的 hook。

## API

```ts
const {
    ref,
    curSrc,
    loadStartState,
    loadedState,
    errorState,
  } = useLazyImg(
  src: string | (() => string),
  srcOptions?: {
    loadingSrc: string | (() => string),
    fallbackSrc: string | (() => string)
  },
  options?: IntersectionObserverInit | undefined,
): ReturnValue;
```

### 参数

| 参数       | 说明                                        | 类型                     |
| ---------- | ------------------------------------------- | ------------------------ |
| src        | 图片的地址                                  | string \| (() => string) |
| srcOptions | src 相关的配置                              | srcOptions               |
| options    | IntersectionObserver 监听配置，同 useInView | IntersectionObserverInit |

### srcOptions

| 参数        | 说明                             | 类型                     |
| ----------- | -------------------------------- | ------------------------ |
| loadingSrc  | 加载中图片地址                   | string \| (() => string) |
| fallbackSrc | 回退图片地址，原图加载失败时使用 | string \| (() => string) |

### 返回值

| 参数           | 说明                                                    | 类型                                    |
| -------------- | ------------------------------------------------------- | --------------------------------------- |
| ref            | img 元素 ref                                            | React.MutableRefObject<T \| undefined\> |
| curSrc         | 当前图片使用的 src（src、loadingSrc、fallbackSrc 之一） | string \| undefined                     |
| loadStartState | 图片是否开始加载                                        | Boolean                                 |
| loadedState    | 图片是否加载完毕                                        | Boolean                                 |
| errorState     | 图片加载错误实例                                        | ErrorEvent \| null                      |
