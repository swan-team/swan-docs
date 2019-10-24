---
title: swan.offPageNotFound
header: develop
nav: api
sidebar: swan-offPageNotFound
---
 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序要打开的页面不存在事件。

**方法参数：** Function callback | 无
小程序要打开的页面不存在事件的回调函数（swan.onPageNotFound的回调方法引用）；当不传参数时，取消该类全部监听事件。

**示例代码**
<a href="swanide://fragment/89c7e6b8401b308e07556874b8467b271567706228311" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onPageNotFound(function(res) {
            console.log(res);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）
    onShow() {
        setTimeout(function() {
            swan.offPageNotFound();
        }, 3000);
    }
});
```