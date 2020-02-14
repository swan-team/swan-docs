---
title: 小游戏跳转
layout: gamedoc
topic: openApi
categoryName: api
priority: 01-09
---

### swan.navigateToMiniProgram()

打开另一个小程序或小游戏。

```js
swan.navigateToMiniProgram(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|-|
|appKey|string|是|要打开的小程序或小游戏的 App Key|
|path|string|否|打开的页面路径，如果为空则打开首页|
|extraData|Object|否|需要传递给目标小程序的数据，目标小程序可在 `swan.onShow()` 中获取到这份数据。|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|


**示例：**

```js
swan.navigateToMiniProgram({
    appKey: 'duG5QNDKyzwIn2RUGObsiwql4vU6wEwU',
    path: '/path/page/0',
    extraData: {},
    success: (res) => {
        console.log('navigateToMiniProgram success', res);
    },
    fail: (error) => {
        console.log('navigateToMiniProgram fail', error);
    }
});
```

### swan.navigateBackMiniProgram()

返回到上一个小程序或小游戏。

```js
swan.navigateBackMiniProgram(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|-|
|extraData|Object|否|需要返回给上一个小程序或小游戏的数据，上一个小程序或小游戏可在 `swan.onShow()` 中获取到这份数据|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.navigateBackMiniProgram({
    extraData: {},
    success: (res) => {
        console.log('navigateBackMiniProgram success', res);
    },
    fail: (error) => {
        console.log('navigateBackMiniProgram fail', error);
    }
});
```