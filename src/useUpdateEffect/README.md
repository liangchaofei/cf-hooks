---
title: useUpdateEffect
nav:
  title: Hooks
  path: /hooks
group:
  title: useUpdateEffect
---

# useUpdateEffect

一个只在依赖更新时执行的 useEffect hook。

## 代码演示

<code src="./demo/demo1.tsx" />

## API

```typescript
useUpdateEffect(
  effect: () => (void | (() => void | undefined)),
  deps?: deps,
)
```

### 参数

| 参数   | 说明                       | 类型               |
| ------ | -------------------------- | ------------------ |
| effect | 可执行函数                 | function           |
| deps   | 可选项，传入依赖变化的对象 | array \| undefined |
