---
title: swan.onPageNotFound
header: develop
nav: api
sidebar: swan-onPageNotFound
---


> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释**：   监听小程序要打开的页面不存在事件。该事件与 [App.onPageNotFound](/develop/framework/app_service_register/) 的回调时机一致。



##  方法参数
   
Function callback

小程序要打开的页面不存在的事件回调函数。

###  callback返回参数说明 

|属性|类型|说明|
|----|----|----|
|path|string|不存在页面的路径|
|query|Object|打开不存在页面的 query 参数|
|isEntryPage|boolean|是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）|

## 代码示例



### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onPageNotFound.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

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

###  代码示例 1 ：在生命周期的onPageNotFound中使用

 
<a href="swanide://fragment/1e8c3ffbb08f5f2ad67a325f4e4f8c231572839598490" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {

    }，
    onPageNotFound(res) {
        console.log(res);
        swan.showModal({
            title: '',
            content: JSON.stringify(res)
        });
        // 页面不存在时，默认跳转到首页，如果是 tabbar 页面，请使用 swan.switchTab 进行跳转
        swan.navigateTo({
            url: '/home/home'
        });
    }
});

```

###  代码示例 2：等同于示例一的另一种写法   

<a href="swanide://fragment/7d29139d4769344ee69353e82515a0151572839669563" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onPageNotFound(function(res) {
            console.log(res);
            swan.showModal({
                title: '',
                content: JSON.stringify(res)
            });
            // 页面不存在时，默认跳转到首页，如果是 tabbar 页面，请使用 swan.switchTab 进行跳转
            swan.navigateTo({
                url: '/home/home'
            });
        });
    }
});

```

### 代码示例 3：可根据开发者的业务逻辑调整用法  
 
<a href="swanide://fragment/eba6e1bd8fa9b56e7cb4c8815253db271572847251493" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data: {},
    onTap() {
        swan.navigateTo({
            url: '/path/to/otherPage'
        });
        swan.onPageNotFound(function(res) {
            console.log(res);
            swan.showModal({
                title: '',
                content: JSON.stringify(res)
            });
            // 页面不存在时，默认跳转到首页，如果是 tabbar 页面，请使用 swan.switchTab 进行跳转
            swan.navigateTo({
                url: '/home/home',
                success: res => {
                    swan.offPageNotFound();
                },
                fail: err => {
                    console.log('navigateTo fail');
                }
            });
        });
    }
});

```

##  Bug & Tip  

- 开发者可以在回调中进行页面重定向。
- 在除了App.js的其他时机中调用swan.onPageNotFound的话，需要用[swan.offPageNotFound](https://smartprogram.baidu.com/docs/develop/api/base_app_event/swan-offPageNotFound/)取消监听，否则会出现监听多次的情况
