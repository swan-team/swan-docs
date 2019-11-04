---
title: swan.onPageNotFound
header: develop
nav: api
sidebar: swan.onPageNotFound
---


> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释：** 监听小程序要打开的页面不存在事件。该事件与 [App.onPageNotFound](/develop/framework/app_service_register/) 的回调时机一致。

**方法参数：** Function callback
小程序要打开的页面不存在的事件回调函数。

**callback返回参数说明**：

|属性|类型|说明|
|----|----|----|
|path|string|不存在页面的路径|
|query|Object|打开不存在页面的 query 参数|
|isEntryPage|boolean|是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onPageNotFound.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/3a13a179e4089fc5eb246675244a37551567703460426" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onPageNotFound(function(res) {
            console.log(res);
            // 如果将要跳转到的页面属于 tabbar 的某一页面，请使用 swan.switchTab 进行跳转
            // Do something
            // 页面不存在时，默认跳转到首页
            swan.redirectTo({
                url: '/index/index'
            });
        });
    }
});

```

**说明:**
- 开发者可以在回调中进行页面重定向。
