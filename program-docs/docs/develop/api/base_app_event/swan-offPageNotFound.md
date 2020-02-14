---
title: swan.offPageNotFound
header: develop
nav: api
sidebar: swan-offPageNotFound
---
 
> 基础库 3.60.2 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

**解释**：   取消监听小程序要打开的页面不存在事件。

##  方法参数

### 参数说明

|属性名|	类型|	默认值|	必填|	说明|
|:---- | :---- | :---- | :---- | :---- | 
|callback|   Function  | 无||小程序要打开的页面不存在事件的回调函数（swan.onPageNotFound的回调方法引用）；当不传参数时，取消该类全部监听事件。|

## 示例

<a href="swanide://fragment/b71b5ec3e798f27e144351dc870b7f251573989727290" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/offPageNotFound.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/offPageNotFound.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例  



```js
// app.js
App({
    onLaunch() {
        swan.onPageNotFound(function(res) {
            console.log(res);
            swan.showModal({
                title: '',
                content: '找不到页面，将跳转到首页'
            });
            swan.navigateTo({
                url: '/index/index'
            });
        });
    },
    onShow() {
        // 在App onShow后约3秒取消事件监听（仅做功能示例，开发者可根据业务逻辑选择取消监听时机）
        setTimeout(() => {
            swan.offPageNotFound();
            swan.showModal({
                title: '',
                content: '此后将不再触发swan.onPageNotFound回调'
            });
        }, 3000)
    }
});
```