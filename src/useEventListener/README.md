---
title: useEventListener
nav:
  title: Hooks
  path: /hooks
group:
  title: useEventListener
---

# useEventListener

用于添加/移除监听事件的 hook。

## 代码演示

### 监听 dom 点击事件

<code src="./demo/demo1.tsx" />

### 监听滚动事件

<code src="./demo/demo2.tsx" />

## API

```ts
const ref = useEventListener(
  eventName: string,
  eventListener: Function,
  options?: { target: Target, capture?: boolean; once?: boolean; passive?: boolean; },
});

type Target = Window | HTMLElement | null | undefined;
```

### 参数

| 参数          | 说明                   | 类型     |
| ------------- | ---------------------- | -------- |
| eventName     | 事件名称               | string   |
| eventListener | 事件监听回调函数       | Function |
| options       | 可选配置项，见 Options | Options  |

### 返回值

| 参数 | 说明                                                                | 类型                                 |
| ---- | ------------------------------------------------------------------- | ------------------------------------ |
| ref  | 元素 ref，若监听 window 事件或设置了 options.target，可忽略此返回值 | React.MutableRefObject<HTMLElement\> |

### Options

| 参数    | 说明                                                                                                                                            | 类型              | 默认值 |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------ |
| target  | 监听对象，若不填写，将监听应用 ref 的对象                                                                                                       | HTMLElement\|null | window | undefined |
| capture | 设置为 true 表示 eventListener 会在该类型的事件捕获阶段传播到该 target 时触发。                                                                 | boolean           | false  |
| once    | 设置为 true 表示 eventListener 在事件触发后只执行一次                                                                                           | boolean           | false  |
| passive | 同原生 passive 参数，具体可见：[让页面滑动流畅得飞起的新特性：Passive Event Listeners](https://blog.csdn.net/dj0379/article/details/52883315)。 | boolean           | false  |
