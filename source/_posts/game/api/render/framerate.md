---
title: 帧率
layout: gamedoc
topic: render
categoryName: api
priority: 06-07
---

### requestAnimationFrame()

请求执行重绘。

```js
requestAnimationFrame(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

**返回值：**

`number` 类型的句柄，用于 `cancelAnimationFrame` 中取消。


### cancelAnimationFrame()

取消重绘请求。

```js
cancelAnimationFrame(handler)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|handler|number|`requestAnimationFrame` 返回的句柄|

