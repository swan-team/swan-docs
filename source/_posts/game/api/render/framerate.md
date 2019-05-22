---
title: 帧率
layout: gamedoc
topic: render
categoryName: api
priority: 09-07
---

### swan.setPreferredFramesPerSecond(number fps)

可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，[`requestAnimationFrame()`](#requestAnimationFrame) 的回调频率会发生改变。

设置帧率

```js
swan.setPreferredFramesPerSecond(fps);
```


**参数**：

|参数|类型|描述|
|-|-|-|
|fps|number|帧率值，有效范围 1~60|

### requestAnimationFrame()

请求执行重绘。

```js
requestAnimationFrame(callback)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

**返回值**：

`number` 类型的返回值，用于 [`cancelAnimationFrame`](#cancelAnimationFrame) 中取消。


### cancelAnimationFrame()

取消重绘请求。

```js
cancelAnimationFrame(handler)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|handler|number|[`requestAnimationFrame()`](#requestAnimationFrame) 的返回值|

