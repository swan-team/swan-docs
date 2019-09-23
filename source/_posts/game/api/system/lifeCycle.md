---
title: 生命周期
layout: gamedoc
topic: system
categoryName: api
priority: 02-01
---

### swan.getLaunchOptionsSync()

获得小游戏启动参数。

**返回值：**

`Object`：

|属性|类型|描述|
|-|-|-|
|scene|number|场景值|
|query|Object|启动参数|
|referrerInfo|Object|来源信息|

**referrerInfo 的结构**

|属性|类型|描述|
|-|-|-|
|appId|string|调起小游戏的 appId|
|extraData|Object|额外的信息|

**示例：**

```js
const launchInfo = swan.getLaunchOptionsSync();
console.log('launchOptionsSync:', launchInfo.query);

```

### swan.onShow()

监听小游戏回到前台。

```js
swan.onShow(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

参数

**Object res**

|属性|类型|描述|
|-|-|-|
|scene|number|场景值|
|query|Object|启动参数|
|shareTicket|string| shareTicket|
|referrerInfo|Object|由从另一个小程序或小游戏打开此小游戏时，返回此字段|

**referrerInfo 的结构**

|属性|类型|描述|
|-|-|-|
|appKey|string|来源小程序或小游戏的 appKey |
|extraData|Object|来源小程序或小游戏传过来的信息|


### swan.offShow()

撤销监听小游戏回到前台。

```js
swan.offShow(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 [`swan.onShow()`](#swan-onShow) 时传入的回调函数|


### swan.onHide()
监听小游戏退到后台。

```js
swan.onHide(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|


### swan.offHide()

撤销监听小游戏退到后台。

```js
swan.offHide(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 [`swan.onHide()`](#swan-onHide) 时传入的回调函数|


### swan.exit()

退出小游戏。

```js
swan.exit(opts)
```

**参数值：**

|属性|类型|描述|
|-|-|-|
|opts|Object|调用该时，要传入的对象参数|
|opts.success|function|接口调用成功的回调函数|
|opts.fail|function|接口调用失败的回调函数|
|opts.complete|function|接口调用完成的回调函数，无论失败成功都会调用|

### swan.onDisplay()

> 从 [基础库 1.11.3](/game/tutorials/version/releaseLog/) 开始支持

监听小游戏首次绘制上屏，此时loading页面会消失。

```js
swan.onDisplay(function(res) {
    // res.startupTime 为小游戏启动时长，单位ms
})
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|回调函数|

参数

**Object res**

|属性|类型|描述|
|-|-|-|
|startupTime|number|小游戏启动时长，单位ms|

### swan.offDisplay()

> 从 [基础库 1.11.3](/game/tutorials/version/releaseLog/) 开始支持

取消监听小游戏首次绘制上屏。

```js
swan.offDisplay(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|调用 `swan.onDispaly()` 时传入的回调函数|

