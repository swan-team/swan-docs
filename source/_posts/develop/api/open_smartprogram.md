---
title: 打开智能小程序
header: develop
nav: api
sidebar: open_smartprogram
---

navigateToSmartProgram
---
**解释：** 打开另一个小程序。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|appKey | String | 是 | 要打开的小程序App Key 。|
|path | String | 否 | 打开的页面路径，如果为空则打开首页 。|
|extraData | Object | 否 | 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<a href="swanide://fragment/dd7e70fdad89cca08b0a8a54e12a0b9c1540396427" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.navigateToSmartProgram({
    appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
    path: '', // 打开的页面路径，如果为空则打开首页
    extraData: {
        foo: 'baidu'
    },
    success: function (res) {
        // 打开成功
    }
});
```

navigateBackSmartProgram
---
**解释：** 返回到上一个小程序。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|extraData | Object | 否 | 需要返回给上一个小程序的数据，上一个小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
```js
swan.navigateBackSmartProgram({
    extraData: {
        foo: 'baidu'
    },
    success: function (res) {
        // 返回成功
    }
});
```