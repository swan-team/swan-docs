---
title: 防沉迷
layout: gamedoc
topic: openApi
categoryName: api
priority: 01-08
---

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
