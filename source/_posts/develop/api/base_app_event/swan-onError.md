---
title: swan.onError
header: develop
nav: api
sidebar: swan-onError
---


 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序错误事件。如脚本错误或`API`调用报错等。该事件与 [App.onError](/develop/framework/app_service_register/) 的回调时机与参数一致。

**方法参数：** Function callback
小程序错误事件的回调函数。

**callback返回参数说明**：

**Object error**
错误信息，包含堆栈。

**示例代码**
<a href="swanide://fragment/586c93bf9be6677849b96b75d4a197001567705705833" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onError(function(errMsg) {
            console.log(errMsg);
        });
    };
});
```