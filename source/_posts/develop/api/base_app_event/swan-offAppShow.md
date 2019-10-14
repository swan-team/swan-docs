---
title: swan.offAppShow
header: develop
nav: api
sidebar: swan-offAppShow
---
 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 取消监听小程序切前台事件。

**方法参数：** 无

**示例代码**
<a href="swanide://fragment/e69e06ce6a94ec75c6ef2b29e4e34be51567706876670" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onAppShow(function(res) {
            console.log(res.scene);
            console.log(res.path);
            console.log(res.query);
        });
    },
    // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机） 
    onShow() {
        setTimeout(function() {
            swan.offAppShow();
        }, 3000);
    }
});
```