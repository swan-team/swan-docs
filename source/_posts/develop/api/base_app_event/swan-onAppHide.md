---
title: swan.onAppHide
header: develop
nav: api
sidebar: swan-onAppHide
---
 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序切后台事件。该事件与 [App.onHide](/develop/framework/app_service_register/) 的回调时机一致。

**方法参数：** Function callback
小程序切后台事件的回调函数。


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onAppShow.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/5c5245a3754670b23afe52bbf27570d91567705983829" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onAppHide(function() {
            // Do other things
        });
    }
});
```