---
title: 分享
header: develop
nav: api
sidebar: open_share
---

onShareAppMessage
---
**解释：** 在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。

* 用户点击分享按钮的时候会调用；
* 此事件需要 return 一个`Object`，用于自定义分享内容。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |说明  |
|---- | ---- | ---- |
|from |String  |  分享事件来源。button：页面内转发按钮；menu：右上角分享菜单 。 |
|target |Object  |  如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined 。为兼容使用了3.10.16(手百11.2)以下版本的基础库，原使用 currentTarget 的获取方式保留至2月15日下线。 |

**自定义分享字段：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title |String  |  否  | 分享标题|
|content |String  |  否  | 分享内容|
|imageUrl |String  |  否  | 分享图标|
|path |String  |  否  | 页面 path ，必须是以 / 开头的完整路径。|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<!-- <a href="swanide://fragment/5ade9255636e820034fd14dee1d9a1ef1540396560" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```javascript
Page({
    onShareAppMessage() {
        return {
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value'
        };
    }
});
```

openShare
---
**解释：** 调起分享面板。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title |String  |  否  | 分享标题|
|content |String  |  否  | 分享内容|
|imageUrl |String  |  否  | 分享图标|
|path |String  |  否  | 页面 path ，必须是以 / 开头的完整路径。|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```javascript
swan.openShare({
  title: '智能小程序示例',
  content: '世界很复杂，百度更懂你',
  path: '/pages/openShare/openShare?key=value'
});
```

**Bug & Tip**
1、bug: 百度App Android 客户端 10.13 以下版本，点击分享面板的取消时，不会执行 fail 回调。
