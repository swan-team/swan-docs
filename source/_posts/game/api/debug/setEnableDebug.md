---
title: swan.setEnableDebug()
layout: gamedoc
topic: debug
draft: true
categoryName: api
---

> 百度 APP 客户端 11.2，基础库 1.0.9 开始支持

设置是否打开调试开关，此开关对正式版也能生效。
```js
    swan.setEnableDebug(opts);
```
**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|-|
| opts | Object |是|调用该接口时，传入的对象参数|
| opts.enableDebug | boolean |是|是否打开调试|
| opts.success | function |否|接口调用成功的回调函数|
| opts.fail | function |否|接口调用失败的回调函数|
| opts.complete | function |否|接口调用结束的回调函数(调用成功、失败都会执行)|

**示例代码**
```js
// 打开调试
swan.setEnableDebug({
    enableDebug: true
})

// 关闭调试
swan.setEnableDebug({
    enableDebug: false
})
```
**说明：**
- 可以先在开发版或体验版打开调试模式，再切回到正式版就能看到调试器;
- 请确认已登录百度帐号，当前登录用户属于该小程序开发者时，才能打开调试。

