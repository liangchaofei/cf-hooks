---
title: useBoolean
nav:
  title: Hooks
  path: /hooks
group:
  title: useBoolean
---

# useBoolean

用来管理 boolean 类型状态的 hook。

## 代码演示

<code src="./demo/demo1.tsx" />

## API

```typescript
const result: {
  status: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean) => void;
} = useBoolean(initVal?: boolean);
```

### 参数

| 参数         | 说明                 | 类型                 | 默认值 |
| ------------ | -------------------- | -------------------- | ------ |
| initialValue | 可选项，默认的状态值 | boolean \| undefined | false  |

### 返回值

| 参数     | 说明                                              | 类型                  |
| -------- | ------------------------------------------------- | --------------------- |
| state    | 当前状态值                                        | boolean               |
| toggle   | 触发状态更改的函数,可以接受一个可选参数修改状态值 | (value?: any) => void |
| setTrue  | 设置状态值为 true                                 | () => void            |
| setFalse | 设置状态值为 false                                | () => void            |
