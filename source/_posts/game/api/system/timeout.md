---
title: 定时器
layout: gamedoc
topic: system
categoryName: api
---

### setTimeout()

设置延时执行的定时器。

```js
setTimeout(callback, delay)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|
|delay|number|延迟多少毫秒执行，默认值为 `0`|

**返回值：**

`number` 类型的 ID，用于 [`clearTimeout()`](#clearTimeout) 中取消。



### clearTimeout()

取消定时器。

```js
clearTimeout(handler)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|handler|number|[`setTimeout()`](#setTimeout) 返回的 ID|

**示例：**

```js
var handler = setTimeout(function() {
    console.log('tick');
}, 100);
clearTimeout(handler);
```




### setInterval()

设置定期循环执行的定时器。

```js
setInterval(callback, delay)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|
|delay|number|每隔多少毫秒执行，默认值为 `0`|

**返回值：**

`number` 类型的 ID，用于 [`clearInterval()`](#clearInterval) 中取消。



### clearInterval()

取消定时器。

```js
clearInterval(handler)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|handler|number|[`setInterval()`](#setInterval) 返回的 ID|

**示例：**

```js
var handler = setInterval(function() {
    console.log('tick');
}, 100);
clearInterval(handler);
```
