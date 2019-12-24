---
title: 防沉迷
layout: gamedoc
topic: openApi
categoryName: api
priority: 01-08
---

### swan.getAntiAddiction()

**根据国家政策制定防沉迷接口**

> 基础库 swan-game.js 1.17.0 版本开始支持。

防沉迷接口为响应国家政策，对于游戏玩家做防沉迷逻辑；开发者注册此方法，当触发防沉迷条件时，调用开发者的回调方法，传递防沉迷原因以及信息，通知开发者对于游戏逻辑做防沉迷处理

**事件**: `onAntiAddiction(callback)`

参数：`callback`为触发了防沉迷方法时的回调方法，该方法的参数为：

|属性|类型|描述|
|-|-|-|
|state|number|防沉迷错误原因代码|
|msg|string|具体的管控信息|

`state`的有效值

|值|描述|
|-|-|
|10001|需要限制游戏（非法定节假日游戏时间限制1.5小时）|
|10002|需要限制游戏（法定节假日游戏时间限制3小时）|
|10003|需要限制游戏（当前时间22:00 - 8:00）|

**示例：**

```js
let api = swan.getAntiAddiction();
api.onAntiAddiction(function ({state, msg}) {
    console.log("state: ", state);
    console.log("msg: ", msg);
});
```

### swan.checkIsUserAdvisedToRest()

该接口根据用户当天单个游戏累计时间是否超过 5 小时，判断用户是否需要休息；如果累计时间大于等于 5 小时，则建议用户休息。

```js
swan.checkIsUserAdvisedToRest(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该接口时，传入的对象参数|
|opts.todayPlayedTime|number| |是|当天单个游戏累计已玩时间，单位：秒|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口调用成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.result|boolean|是否建议用户休息，当传入的游戏时间大于等于 5 小时，则为 true；否则为 false|

`fail` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|报错信息|

`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。

**示例：**

```js
swan.checkIsUserAdvisedToRest({
    todayPlayedTime: 1800,
    success: res => console.log('接口执行成功', res),
    fail: res => console.log('接口执行失败', res),
    complete: res => console.log('接口执行完成', res)
});
```
