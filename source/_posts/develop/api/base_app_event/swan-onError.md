---
title: swan.onError
header: develop
nav: api
sidebar: swan-onError
---


 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释**：   监听小程序错误事件。如脚本错误或`API`调用报错等。该事件与 [App.onError](/develop/framework/app_service_register/) 的回调时机与参数一致。



##  方法参数：   
Function callback
小程序错误事件的回调函数。

callback返回参数说明  ：

Object error  
错误信息，包含堆栈。

## 代码示例



### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onError.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onError.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 1：在生命周期的onError中使用 

 
 

<a href="swanide://fragment/7d5fb8de42baef8e46627d5e1a027d8e1572848925501" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch(res) {

    },
    onError(err) {
        console.log('catch error');
        swan.showModal({
            title: '',
            content: JSON.stringify(err)
        });
    }
});

```
###  代码示例 2：等同于示例一的另一种写法   



<a href="swanide://fragment/3b777b5572d06daebc52320221400de11572848996819" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// app.js
App({
    onLaunch() {
        swan.onError(function(errMsg) {
            console.log('catch error');
            console.log(errMsg);
            swan.showModal({
                title: '',
                content: JSON.stringify(errMsg)
            });
        });
    };
});
```

###  代码示例 3：可根据开发者的业务逻辑调整用法 


<a href="swanide://fragment/8efbf176816348c943901a2e541563271573098386086" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data: {},
    onTap() {
        swan.showToast({
            title: '已触发',
            icon: 'none'
        });
        swan.onError(function(errMsg) {
            console.log('catch error', errMsg);
            swan.showModal({
                title: '',
                content: JSON.stringify(errMsg),
                success: res => {
                    swan.offError();
                },
                fail: err => {
                    
                }
            })
        });
        console.log(a);
    }
});

```
