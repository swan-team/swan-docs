---
title: swan.onAppHide
header: develop
nav: api
sidebar: swan-onAppHide
---
 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释**：   监听小程序切后台事件。该事件与 [App.onHide](/develop/framework/app_service_register/) 的回调时机一致。


##  方法参数

Function callback
小程序切后台事件的回调函数。

## 代码示例



### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onAppHide.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onAppHide.gif ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例  

* 示例一：在onHide中使用 
<a href="swanide://fragment/dd9635306671da7cc68151263cf468b61572852464155" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
```js
// app.js
App({
    onHide: function (res) {
        console.log('onHide', res)
        swan.showModal({
            title: 'res',
            content: JSON.stringify(res),
            showCancel: false
        });
    }
});

```

* 示例二：在生命周期的onAppHide中使用 
<a href="swanide://fragment/4bf6ff94cddfcd769859def82905c36b1572852489456" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch: function () {
        swan.onAppHide(function(res) {
            swan.showModal({
                title: 'res',
                content: JSON.stringify(res),
                showCancel: false  
            });
            console.log('App hide');
        });
    }
});

```