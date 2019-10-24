---
title: swan.offError
header: develop
nav: api
sidebar: swan-offError
---

 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序错误事件。

**方法参数：** 无

**示例代码**
<a href="swanide://fragment/d08a55a9db6a51a7646cb4ded4c0eca21567706756650" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onError(function(errMsg) {
            console.log(errMsg);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）  
    onShow() {
        setTimeout(function() {
            swan.offError();
        }, 3000);
    }
});
```