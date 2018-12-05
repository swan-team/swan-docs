---
title: 性能
layout: gamedoc
topic: performance
categoryName: api
---

### swan.getPerformance()

获取性能对象，性能对象包含 `now()` 方法，可用于获取从小游戏运行到现在的高精度时间戳。

**返回值：**

返回 `Object` 类型的性能对象，包含 `now()` 方法。

**示例：**

```js
const performance = swan.getPerformance();
const start = performance.now();

setTimeout(function () {
    const end = performance.now();
    console.log(end - start);
}, 1000);
```
