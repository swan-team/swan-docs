---
title: 触摸事件
layout: gamedoc
topic: system
categoryName: api
---

### swan.onTouchStart()

监听触摸开始事件。

```js
swan.onTouchStart(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

`callback` 回调参数：

|参数|类型|描述|
|-|-|-|
|touches|Array.<`Object\`>|触摸点的数组|
|touches[].identifier|number|触摸点的标识符|
|touches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|touches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|changedTouches|Array.<`Object\`>|触发此次事件的触摸点数组，也就是新增的触摸点|
|changedTouches[].identifier|number|触摸点的标识符|
|changedTouches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|changedTouches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|timestamp|number|程序开始运行的时间戳|
|target|HTMLCanvasElement|引起触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象|
|currentTarget|HTMLCanvasElement|绑定触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象，也就是始终等于 `target`|


### swan.offTouchStart()

撤销监听触摸开始事件。

```js
swan.offTouchStart(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 `swan.onTouchStart` 时传入的回调函数|


### swan.onTouchMove()

监听触摸移动事件。

```js
swan.onTouchMove(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

`callback` 回调参数：

|参数|类型|描述|
|-|-|-|
|touches|Array.<`Object\`>|触摸点的数组|
|touches[].identifier|number|触摸点的标识符|
|touches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|touches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|changedTouches|Array.<`Object\`>|触发此次事件的触摸点数组，也就是移动的触摸点|
|changedTouches[].identifier|number|触摸点的标识符|
|changedTouches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|changedTouches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|timestamp|number|程序开始运行的时间戳|
|target|HTMLCanvasElement|引起触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象|
|currentTarget|HTMLCanvasElement|绑定触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象，也就是始终等于 `target`|


### swan.offTouchMove()

撤销监听触摸移动事件。

```js
swan.offTouchMove(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 `swan.onTouchMove()`时传入的回调函数|


### swan.onTouchEnd()

监听触摸终止事件。

```js
swan.onTouchEnd(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

`callback` 回调参数：

|参数|类型|描述|
|-|-|-|
|touches|Array.<Object\>|触摸点的数组|
|touches[].identifier|number|触摸点的标识符|
|touches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|touches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|changedTouches|Array.<Object\>|触发此次事件的触摸点数组，也就是结束触摸的点|
|changedTouches[].identifier|number|触摸点的标识符|
|changedTouches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|changedTouches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|timestamp|number|程序开始运行的时间戳|
|target|HTMLCanvasElement|引起触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象|
|currentTarget|HTMLCanvasElement|绑定触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象，也就是始终等于 `target`|


### swan.offTouchEnd()

撤销监听触摸终止事件。

```js
swan.offTouchEnd(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 `swan.onTouchEnd` 时传入的回调函数|


### swan.onTouchCancel()

监听触摸取消事件，比如由于接入电话等情况中断了触摸事件。

```js
swan.onTouchCancel(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

`callback` 回调参数：

|参数|类型|描述|
|-|-|-|
|touches|Array.<Object\>|触摸点的数组|
|touches[].identifier|number|触摸点的标识符|
|touches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|touches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|changedTouches|Array.<Object\>|触发此次事件的触摸点数组，也就是触摸取消的点|
|changedTouches[].identifier|number|触摸点的标识符|
|changedTouches[].clientX|number|触摸点据小游戏容器可显示区域左上角的横向位置|
|changedTouches[].clientY|number|触摸点据小游戏容器可显示区域左上角的纵向位置|
|timestamp|number|程序开始运行的时间戳|
|target|HTMLCanvasElement|引起触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象|
|currentTarget|HTMLCanvasElement|绑定触摸事件的 Canvas 对象，在小游戏中，这个对象始终是屏幕上的 Canvas 对象，也是 `swan.getOnscreenCanvas()` 返回的对象，也就是始终等于 `target`|


### swan.offTouchCancel()

撤销监听触摸取消事件。

```js
swan.offTouchCancel(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 `swan.onTouchCancel` 时传入的回调函数|
